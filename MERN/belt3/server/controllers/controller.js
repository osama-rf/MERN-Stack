const Pet = require('../models/model')

module.exports.findAll = (req, res) => {
    Pet.find().sort({type: 'asc'})
        .then(allPet => res.json(allPet))
        .catch(err => res.json({message: "Something went wrong", error: err}))
}

module.exports.findOnePet = (req, res) => {
    Pet.findOne({_id: req.params._id})
        .then(onePet => res.json(onePet))
        .catch(err => res.json({message: "Something went wrong", error: err}))
}

module.exports.createPet = (req, res) => {
    Pet.create(req.body)
        .then(newPet => res.json(newPet))
        .catch(err => res.status(400).json(err))
}

module.exports.updatePet = (req, res) => {
    Pet.findOneAndUpdate({_id: req.params._id}, req.body, {new: true, runValidators: true})
        .then(newPet => res.json(newPet))
        .catch(err => res.status(400).json(err))
}

module.exports.deletePet = (req, res) => {
    Pet.deleteOne({_id: req.params.id})
        .then(result => res.json({result:result}))
        .catch(err => res.json({message: "Something went wrong", error:err}));
}