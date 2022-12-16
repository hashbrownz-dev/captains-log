const express = require('express')
const router = express.Router()

// ADD MIDDLEWARE HERE

// ROUTES

// INDEX
/*
    URL : /logs
    METHOD : GET
    VIEW : Index.jsx
    ACTION : Display HomePage
*/

router.get('/', (req, res) => {
    res.send('Hello World');
})

// NEW
/*
    URL : /logs/new
    METHOD : GET
    VIEW : New.jsx
    ACTION : Display a form for creating a new Log
*/

router.get('/new', (req, res) => {
    res.send('New');
})

// DELETE
/*
    URL : /logs:id
    METHOD : DELETE
    VIEW : 
    ACTION : Delete an item from our database with findByIdAndRemove(), redirect to our index page
*/

router.delete('/:id', (req, res) => {
    res.send(req.body + req.params.id);
})

// UPDATE
/*
    URL : /logs:id
    METHOD : PUT
    VIEW : 
    ACTION : Update a document in our database with findByIdAndUpdate(), redirect to SHOW page
*/

router.put('/:id', (req, res) => {
    res.send(req.body + req.params.id);
})

// CREATE
/*
    URL : /logs
    METHOD : POST
    VIEW :
    ACTION : Create a document and add it to our database with the create(), redirect to SHOW page
*/

router.post('/', (req, res) => {
    res.send(req.body);
})

// EDIT
/*
    URL : /logs/:id/edit
    METHOD : GET
    VIEW : Edit.jsx
    Action : Display a form for editing a log
*/

router.get('/edit', (req, res) => {
    res.send('Edit');
})

// SHOW
/*
    URL : /logs/:id
    METHOD : GET
    VIEW : Show.jsx
    Action : Retrieve a document from our database with findById() and render it using the Show View
*/

router.get('/:id', (req, res) => {
    res.send(`Show: ${req.params.id}`);
})

// EXPORT

module.exports = router;