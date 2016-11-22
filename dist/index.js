"use strict";
const http = require('http');
const debug = require('debug');
const App_1 = require('./App');
let dubugServer = debug('MarketEve:Server');
const port = normalizePort(process.env.PORT || 7746);
App_1.default.set('port', port);
const server = http.createServer(App_1.default);
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
    dubugServer(`Listening on ${bind}`);
}
