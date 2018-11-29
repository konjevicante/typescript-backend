import * as mongoose from 'mongoose';
import { UserSchema } from "../models/user";
import { Request, Response } from 'express';

const User = mongoose.model('User', UserSchema);

export class Controller {
    public addNewUser(req: Request, res: Response) {
        let user = new User(req.body);
        user.save((err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }

    public getUserWithIdentifier(req: Request, res: Response) {
        User.findById(req.params.id, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }

    public deleteUser(req: Request, res: Response) {
        User.remove({_id: req.params.id}, (err, _) => {
            if (err) {
                res.send(err);
            }
            res.json({message: 'Successfully deleted user!'});
        });
    }
}