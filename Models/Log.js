const { Schema, model } = require('mongoose');

// DEFINE SCHEMA

const logSchema = new Schema({
    title:String,
    entry:String,
    shipIsBroken:Boolean,
}, { timestamps:true })

// CREATE A MODEL
// EXPORT

module.exports = model('Log', logSchema);