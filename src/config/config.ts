import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URL = `mongodb+srv://bahhteewerty36:bahhteewerty36@cluster0.kxw8kg9.mongodb.net/?retryWrites=true&w=majority`;

export const config = {
    mongodb: {
        url: MONGODB_URL
    }
};
