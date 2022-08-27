const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    setup: {
        type:String,
        required: true
    },
    punchline: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Jokes = mongoose.model("Jokes", JokeSchema);

module.exports = Jokes;