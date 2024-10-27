import mongoose, { disconnect } from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const USERNAME =process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const Connection = () => {
    const MONGODB_URI =`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.lgr1nsa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    mongoose.connect(MONGODB_URI,{useNewUrlparser: true});

    mongoose.connection.on('connected',() => {
        console.log('Database connected...');
    })
    mongoose.connection.on('disconnected', ()=>
    {
        console.log('DataBase disconnected...');

    })
    mongoose.connection.on('error',() =>{
        console.log('Error while connecting database');
    })

}
export default Connection;
