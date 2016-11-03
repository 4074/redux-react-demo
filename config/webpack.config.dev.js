const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const paths = require('./paths')

module.exports = {
    entry: [
        require.resolve('webpack-dev-server/client') + '?/',
        require.resolve('webpack/hot/dev-server'),
        paths.entry
    ],
    output: {
        path: paths.build,
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: paths.src,
                loader: 'babel',
                query: require('./babel.dev')
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: paths.index
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}