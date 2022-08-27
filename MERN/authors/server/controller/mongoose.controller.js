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

module.exports.updateOneAuthor = async (req, res) => {
    try {
        const updatedAuthor = await Author.findOneAndUpdate({
            _id: req.params._id
        }, {
            name: req.body.name,
        }, {
            runValidators: true,
            new: true,
        })

        return res.json({
            author: updatedAuthor,
        })
    } catch (e) {
        console.error('Unexpected error occur while updating author', e);

        res.status(400).json(e);
    }
};

module.exports.deleteOneAuthor = (req, res) => {
    Author.deleteOne({_id: req.params._id})
        .then(result => res.json({result: result}))
        .catch(err => res.json({message: "Something went wrong", error: err}));
};