import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import webpack from 'webpack'
import webpackConfig from '../config/webpack.config.dev.js'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import App from '../src/containers/App'
import todoApp from '../src/reducers'

const app = express()
app.listen(5000, function() {
    console.log('server running on 5000')
})

const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.use(handleRender)

function handleRender(req, res) {
    const store = createStore(todoApp)

    const html = renderToString(
        <Provider store={store}>
            <App />
        </Provider>
    )

    const state = store.getState()

    res.send(renderFullPage(html, state))
}

function renderFullPage(html, initialState) {
    return `
    <!doctype html>
    <html lang="en">

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>React Demo</title>
    </head>

    <body>
        <div id="root">${html}</div>
        <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script type="text/javascript" src="/build/bundle.js"></script>
    </body>

    </html>
    `
}