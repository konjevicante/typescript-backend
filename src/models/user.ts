import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    username: {
        type: String,
        required: 'Username is missing.'
    },
    email: {
        type: String,
        required: 'Email is required.'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});