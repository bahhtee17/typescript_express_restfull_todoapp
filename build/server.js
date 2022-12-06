"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config/config");
const mongoose_1 = __importDefault(require("mongoose"));
const router = (0, express_1.default)();
mongoose_1.default
    .connect(config_1.config.mongodb.url)
    .then(() => console.log('Connected'))
    .catch((error) => console.log(error));
