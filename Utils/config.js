require('dotenv').config()

const MONGODB_URL =process.env.MONGODB_URL;
const PORT = process.env.PORT;
const HOST = process.env.HOST;
JWT_SECRET = process.env.JWT_SECRET;
NODE_ENV = process.env.NODE_ENV;




module.exports ={
    MONGODB_URL,
    PORT,
    HOST,
    JWT_SECRET,
    NODE_ENV
}
