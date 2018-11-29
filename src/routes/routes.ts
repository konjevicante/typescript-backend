import { Request, Response, NextFunction } from "express";
import { Controller } from "../controllers/controller";

export class Router {

    public controller: Controller = new Controller();

    public routes(app): void {
        app.route('/').get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'Base route active'
            });
        });

        app.route('/user').post(this.controller.addNewUser);
        app.route('/user/:id').get(this.controller.getUserWithIdentifier);
        app.route('/user/:id').delete(this.controller.deleteUser);
    }
}