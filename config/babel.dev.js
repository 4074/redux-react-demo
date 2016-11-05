module.exports = {
    babelrc: false,
    cacheDirectory: true,
    presets: [
        'es2015',
        'react'
    ],
    plugins: [
        ['import', {libraryName: 'antd', style: 'css'}]
    ]
}