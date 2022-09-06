const Pirate = require('../models/model')

module.exports.findAll = (req, res) => {
    Pirate.find().sort({name: 'asc'})
        .then(allPirate => res.json(allPirate))
        .catch(err => res.json({message: "Something went wrong", error: err}))
}

module.exports.findOnePirate = (req, res) => {
    Pirate.findOne({_id: req.params._id})
        .then(onePirate => res.json(onePirate))
        .catch(err => res.json({message: "Something went wrong", error: err}))
}

module.exports.createPirate = (req, res) => {
    Pirate.create(req.body)
        .then(newPirate => res.json(newPirate))
        .catch(err => res.status(400).json(err))
}

module.exports.updatePirate = (req, res) => {
    Pirate.findOneAndUpdate({_id: req.params._id}, req.body, {new:true, runValidators: true})
        .then(newPirate => res.json(newPirate))
        .catch(err => res.status(400).json(err));
}

module.exports.deletePiarte = (req, res) => {
    Pirate.deleteOne({_id: req.params._id})
        .then(result => res.json({result:result}))
        .catch(err => res.json({message: "Something went wrong", error:err}));
}

// const updatePet = (req, res) => {
//     Pet.findOneAndUpdate({ _id: req.params.id }, req.body, {
//         new: true, runValidators: true,
//     }).
//     then(updatedPet => res.json(updatedPet)).
//     catch(err => res.status(400).json(err))
// }
//
// const deletePet = (req, res) => {
//     Pet.findOneAndDelete({ _id: req.params.id }).
//     then(result => res.json(result)).
//     catch(err => res.status(400).json(err))
// }