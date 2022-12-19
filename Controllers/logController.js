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

// INDEX LOGS

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

const editLog = async (req, res) => {
    try {
        const log = await Log.findById(req.params.id);
        res.render('Edit', { log });
    } catch (error) {
        res.json(error);
    }
}

// SHOW LOG

const showLog = async (req, res) => {
    try{
        const log = await Log.findById(req.params.id);
        res.render('Show', { log });
    } catch (error) {
        res.json(error);
    }
}

// DELETE LOG

const deleteLog = (req, res) => {
    Log.findByIdAndDelete(req.params.id)
        .then( () => {
            res.redirect('/logs')
        })
        .catch( error => {
            res.json(error)
        })
}

// UPDATE LOG

const updateLog = async (req, res) => {
    const { title, entry, shipIsBroken } = req.body;
    const newLog = {
        title,
        entry,
        shipIsBroken : !shipIsBroken ? false : true
    }
    try {
        await Log.findByIdAndUpdate(req.params.id, newLog, {new:true});
        res.redirect('/logs');
    } catch (error) {
        res.json(error);
    }
}

module.exports = {
    createLog,
    indexLogs,
    showLog,
    deleteLog,
    editLog,
    updateLog
}