"use strict";
require("reflect-metadata"); // this shim is required
const routing_controllers_1 = require("routing-controllers");
const express = require('express');
require("./controllers/HeroController");
class App {
    constructor() {
        this.express = express();
        routing_controllers_1.useExpressServer(this.express, {
            routePrefix: "/api"
        });
        // this.routes();
    }
    routes() {
        let router = express.Router();
        router.get('/', (req, res, next) => {
            res.json({
                message: "Hello world!"
            });
        });
        this.express.use('/', router);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new App().express;
