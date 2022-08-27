const Jokes = require("../models/jokes.model");

module.exports = {

    // Return All Jokes
    findAllJoke: (req, res) => {
        Jokes.find()
            .then(jokes => res.json(jokes))
            .catch(err => res.json({message: "Something went wrong", error: err}));
    },

    // Return One Joke
    findOneJoke: (req, res) => {
        Jokes.findOne({_id: req.params._id})
            .then(jokes => res.json(jokes))
            .catch(err => res.json({message: "Something went wrong", error: err}));
    },

    // Create Jokes
    createJokes: (req, res) => {
        Jokes.create(req.body)
            .then(jokes => res.json(jokes))
            .catch(err => res.json({message: "Something went wrong", error: err}));
    },

    // Update Jokes
    updateJokes: (req, res) => {
        Jokes.updateOne({_id:req.params._id}, {
            setup: req.body.setup,
            punchline: req.body.punchline,
        })
            .then(jokes => res.json(jokes))
            .catch(err => res.json({message: "Something went wrong", error: err}));
    },

    // Delete Jokes
    deleteJoke: (req, res) => {
        Jokes.deleteOne({_id:req.params._id})
            .then(jokes => res.json(jokes))
            .catch(err => res.json({message: "Something went wrong", error: err}));
    }

}