const mongoose = require('mongoose')
const uniqueName = require('mongoose-unique-validator');

const PetSchema = new mongoose.Schema({
    petName: {
        type: String,
        required: [true, 'Please add a name of the pet'],
        minlength: [3, 'Pet name must be at least 3 characters'],
        unique: true
    },

    petType: {
        type: String,
        required: [true, 'Please add the type of the pet'],
        minlength: [3, 'Pet type must be at least 3 characters']
    },

    description: {
        type: String,
        required: [true, 'Please add description of the pet'],
        minlength: [3, 'Pet description must be at least 3 characters']
    },

    firstSkill: {
        type: String
    },

    secondSkill: {
        type: String
    },

    thirdSkill: {
        type: String
    }
})


PetSchema.plugin(uniqueName, {message: 'Name of the pet is already taken'});

const Pet = mongoose.model('Pet', PetSchema)
module.exports = Pet