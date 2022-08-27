const Author = require('../models/mongoose.model');

module.exports.findAllAuthors = (req, res) => {
    Author.find({})
        .then(allAuhtor => res.json(allAuhtor))
        .catch(err => res.json({message: "Something went wrong", error: err}));
};

module.exports.findOneAuthor = (req, res) => {
    Author.findOne({_id: req.params._id})
        .then(oneSingleAuthor => res.json(oneSingleAuthor))
        .catch(err => res.json({message: "Something went wrong", error: err}))
};

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(newAuthor => res.json({author: newAuthor}))
        .catch(err => res.status(400).json(err));
};

module.exports.updateOneAuthor = (req, res) => {
    Author.findOneAndUpdate({_id: req.params._id}, req.body, {runValidators: true})
        .then(updatedAuthor => res.json({author: updatedAuthor}))
        .catch(err => res.status(400).json(err));
};

module.exports.deleteOneAuthor = (req, res) => {
    Author.deleteOne({_id: req.params._id})
        .then(result => res.json({result: result}))
        .catch(err => res.json({message: "Something went wrong", error: err}));
};