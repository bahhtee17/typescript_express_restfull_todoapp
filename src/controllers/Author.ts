import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import Author from '../models/Author';

export const createAuthor = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name } = req.body;

        const author = new Author({
            _id: new mongoose.Types.ObjectId(),
            name
        });

        await author.save();
        res.json({ author });
    } catch (err) {
        console.log(err);
        res.status(404).json({ success: false });
    }
};

export const getAllAuthors = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const authors = await Author.find();
        res.json(authors);
    } catch (err) {
        console.log(err);
        res.status(404).json({
            message: 'Error getting authors'
        });
    }
};
