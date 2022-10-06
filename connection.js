require('dotenv').config({path:'.env'});
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const router = express.Router();

app.use(express.json());

const options = {
    useNewUrlParser:true,
}

const connect  = async() =>{
    const connection = await mongoose.connect(process.env.MONGO_DB_VOCALLY_TEST, options).then(
        app.listen(process.env.PORT|3000, ()=>{
            // console.log('mongo db connection successfull')
            console.log('server is attempting to start...')
            console.log('server started');
        })
    ).then(res=>{
        console.log('mongo db connected');
    });

    return connection;
}

const mongoConnect = connect();


app.use(cors());

module.exports = {app, express, router, mongoose, mongoConnect}