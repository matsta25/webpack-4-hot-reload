import express from "express"
import path from "path"

const server = express()

const webpack = require("webpack");
const config = require("../../config/webpack.dev")
const compiler = webpack(config);

const webpackDevMiddleware = require("webpack-dev-middleware")(
    compiler,
    config.devServer
);

server.use(webpackDevMiddleware);

const staticMiddleware = express.static("dist");

const webpackHotMiddleware = require("webpack-hot-middleware")(compiler);

server.use(webpackHotMiddleware)

server.use(staticMiddleware);

server.listen(8080, ()=>{
   console.log("Server is listening on port 8080");
});