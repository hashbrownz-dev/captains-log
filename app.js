// CORE DEPENDENCIES
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

// MODELS

// CONNECT TO DATABASE

const MONGO_URI = process.env.MONGO_URI;

mongoose.set('strictQuery', false);
mongoose.connect(MONGO_URI);

mongoose.connection
    .on('open', ()=> console.log('Connected to MongoDB'))
    .on('close', ()=> console.log('Disconnected from MongoDB'))
    .on('error', (error)=> console.log(error));


// INIT APP

const app = express();

// SET VIEW ENGINE
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx');

// SET STATIC FOLDER
app.use(express.static('public'));

// SET MIDDLEWARE
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:true}));

// ROUTER
app.use('/Logs', require('./Routes/Logs'))

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server running on PORT: ${PORT}.  You better catch it!`));