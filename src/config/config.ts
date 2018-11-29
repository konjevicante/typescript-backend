require('dotenv').config();

export const config = {
    env: process.env.NODE_ENV,
    port: process.env.NODE_PORT,
    mongooseDebug: process.env.MONGOOSE_DEBUG,
    mongo: {
        host: process.env.MONGO_HOST,
        port: process.env.MONGO_PORT
    }
};