"use strict";
require("reflect-metadata"); // this shim is required
const routing_controllers_1 = require("routing-controllers");
const debug = require('debug');
const http = require('http');
const express = require('express');
const serverDebug = debug('MarketEve:Server');
// Import all controllers
// Create express server.
let app = express();
routing_controllers_1.useExpressServer(app, {
    controllers: [__dirname + "/controllers/*.js"],
    routePrefix: "/api"
});
const port = normalizePort(process.env.PORT || 7746);
const server = http.createServer(app);
server.listen(port);
server.on('listening', onListening);
server.on('error', onError);
function normalizePort(val) {
    let port = (typeof val === 'string') ? parseInt(val) : val;
    if (isNaN(port)) {
        return val;
    }
    else if (port >= 0) {
        return port;
    }
    else {
        return false;
    }
}
function onError(error) {
    if (error.syscall !== 'listen')
        throw error;
    let bind = (typeof port === "string") ? `Pipe ${port}` : `Port ${port}`;
    switch (error.code) {
        case 'EACCES':
            console.error(`${bind} requires elevated previleges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}
function onListening() {
    let addr = server.address();
    let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
    serverDebug(`Listening on ${bind}`);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = app;
