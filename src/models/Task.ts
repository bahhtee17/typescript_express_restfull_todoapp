import mongoose, { Schema, Document } from 'mongoose';

export interface ITask {
    title: string;
    description: string;
}

export interface ITaskModel extends ITask, Document {}

const TaskSchema: Schema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true }
    },
    { timestamps: true }
);

export default mongoose.model<ITaskModel>('Task', TaskSchema);
