import mongoose from 'mongoose';
import { connected } from 'process';
export async function connect() {
try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on('connected',() => {
        console.log('MongoDB Connected successfully');
    })
    connection.on('error',(err) => {
        console.log('MongoDB connection error. Please make sure Mongodb is running' + err);
        process.exit();
    })
} catch (error) {
    console.log('something goes wrong  !');
    console.log(error);
    
}

    }
