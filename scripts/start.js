const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const opn = require('opn')

const config = require('../config/webpack.config.dev.js')

const port = 4000
var compiler;

function setupCompiler() {
    compiler = webpack(config)
}

function runDevServer(port) {
    var devServer = new WebpackDevServer(compiler, {
        hot: true
    })

    devServer.listen(port, (err, result) => {
        if (err) {
            return console.log(err)
        }

        console.log('dev server is running')
        openBrowser(port)
    })
}

function openBrowser(port) {
    opn('http://localhost:' + port + '/')
}

function run() {
    setupCompiler()
    runDevServer(port)
}

run()