const JokeController = require('../controllers/jokes.controller');
const app = require("express").Router();

    app.get('/api/jokes/', JokeController.findAllJoke);
    app.get('/api/jokes/:_id', JokeController.findOneJoke);
    app.put('/api/jokes/update/:_id', JokeController.updateJokes);
    app.post('/api/jokes/new', JokeController.createJokes);
    app.delete('/api/jokes/delete/:_id', JokeController.deleteJoke);

    module.exports = app;