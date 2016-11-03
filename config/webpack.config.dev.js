const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: [
        require.resolve('webpack-dev-server/client') + '?/',
        require.resolve('webpack/hot/dev-server'),
        path.resolve(__dirname, '../src/index')
    ],
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve(__dirname, '../index.html')
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}