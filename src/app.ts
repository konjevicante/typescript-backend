import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import { Router } from "./routes/routes";
import { config } from "./config/config";


class App {

    public app: express.Application;
    public router: Router = new Router();

    constructor() {
        this.app = express();
        this.config();
        this.router.routes(this.app);
        this.mongoSetup();
    }

    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // serving static files
        this.app.use(express.static('public'));
    }

    private mongoSetup(): void{
        mongoose.Promise = global.Promise;
        mongoose.connect(config.mongo.host, ({ useNewUrlParser: true }));
    }

}

export default new App().app;