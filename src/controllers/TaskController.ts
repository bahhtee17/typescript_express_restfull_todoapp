import { Request, Response } from 'express';
import mongoose from 'mongoose';
import Task from '../models/Task';

export const createTask = async (req: Request, res: Response) => {
    try {
        const task = new Task({
            _id: new mongoose.Types.ObjectId(),
            title: req.body.title,
            description: req.body.description
        });

        if (!task) {
            return res.status(504).json({ message: 'empty array in task create' });
        }
        await task.save();
        res.json({ task });
    } catch (err) {
        console.log(err);
        res.status(404).json({
            message: 'Failed by creating task'
        });
    }
};

export const tasks = async (req: Request, res: Response) => {
    try {
        const tasks = await Task.find();
        res.json({ tasks });
    } catch (err) {
        console.log(err);
        res.status(404).json({ message: 'Error by getting all tasks' });
    }
};
