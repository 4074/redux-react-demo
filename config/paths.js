const path = require('path')

module.exports = {
    src: path.resolve(__dirname, '../src'),
    build: path.resolve(__dirname, '../build'),
    entry: path.resolve(__dirname, '../src/index'),
    index: path.resolve(__dirname, '../index.html')
}