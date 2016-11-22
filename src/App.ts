import "reflect-metadata"; // this shim is required
import {useExpressServer} from "routing-controllers";
import * as debug from 'debug';
import * as http from 'http';
import * as express from 'express';

import "./controllers/HeroController";

class App {

    public express: express.Application;

    constructor () {
        this.express = express();
        useExpressServer(this.express, {
            routePrefix: "/api"
        });
        this.routes();
    }
    private routes() {
        let router = express.Router();

        router.get('/', (req, res, next) => {
            res.json({
                message: "Hello world!"
            });
        });
        this.express.use('/', router);
    }
}

export default new App().express;