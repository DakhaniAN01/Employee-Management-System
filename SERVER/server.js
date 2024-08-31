import express from 'express';
import cors from 'cors';
import authRoute from './routes/authRoute.js';
import mongoose from 'mongoose'
import dotenv from'dotenv';
import bodyParser from 'body-parser';

const app =express();



app.use(cors());


//MIDDLEWARE
app.use(bodyParser.json({limit:'30mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}));
dotenv.config()
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_DB,{useNewUrlParser:true,useUnifiedTopology:true}).
then(()=>app.listen(process.env.PORT,()=>console.log(`listening at ${process.env.PORT}`)))
.catch((error)=>console.log(error));

//usage of routes

app.use('/auth',authRoute);





