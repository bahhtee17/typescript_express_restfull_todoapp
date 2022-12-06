"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGODB_USER = process.env.MONGODB_USER;
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;
const MONGODB_URL = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@cluster0.kxw8kg9.mongodb.net/typescript?retryWrites=true&w=majority`;
const PORT = process.env.PORT;
exports.config = {
    mongodb: {
        url: MONGODB_URL
    },
    server: {
        port: PORT
    }
};
