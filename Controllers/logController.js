// IMPORT MONGOOSE
const mongoose = require('mongoose');
// IMPORT OUR MODEL
const Log = require('../Models/Log');

// CREATE A LOG

const createLog = async (req, res) => {
    const { title, entry, shipIsBroken } = req.body;
    const newLog = {
        title,
        entry,
        shipIsBroken : !shipIsBroken ? false : true
    }
    try{
        Log.create(newLog, (error, createdLog) => {
            if(error) res.json(error);
            console.log(createdLog);
            res.redirect('/Logs');
        })
    }catch(error){
        res.json(error);
    }
}

// GET ALL LOGS

const indexLogs = async (req, res) => {
    try {
        const logs = await Log.find({});
        res.render('Index', { logs });
    } catch (error) {
        res.json(error);
    }
}

// GET LOG BY ID

// EDIT LOG

// SHOW LOG

// DELETE LOG

module.exports = {
    createLog,
    indexLogs
}