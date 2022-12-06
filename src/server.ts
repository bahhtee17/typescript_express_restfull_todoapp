import express, { Request, Response } from 'express';
import { config } from './config/config';
import http from 'http';
import mongoose from 'mongoose';

import { createAuthor, getAllAuthors } from './controllers/Author';
import { createTask, tasks } from './controllers/TaskController';
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3000;
mongoose
    .connect(config.mongodb.url, { retryWrites: true, w: 'majority' })
    .then(() => {
        console.log('Connection Successful');
    })
    .catch((error) => {
        console.log('Failed Connection');
        console.log(error);
    });

//Author
app.post('/createAuthor', createAuthor);
app.get('/authors', getAllAuthors);

//Task
app.post('/createTask', createTask);
app.get('/', tasks);

app.listen(PORT, () => {
    console.log(`application running on port ${PORT}`);
});
