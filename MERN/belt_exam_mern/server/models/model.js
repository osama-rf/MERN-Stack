const mongoose = require('mongoose')
const uniqueValidatir = require('mongoose-unique-validator')

const PirateSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Name of the pirate is required!"]
    },
    image: {
        type:String,
        required: [true, "You must provided Url image of the pirate"]
    },
    numberChests:{
        type:Number,
        required: [true, "Number of treasure chests is required!"]
    },
    position: {
        type:String,
        required: [true, "You Must provide position of the pirate"]
    },
    catchPhrase: {
        type:String,
        required: [true, "You must provided catchphrase of the pirate"]
    },
    pegLeg: {
        type:Boolean,
        required: [true, "Pirate have peg leg?"]
    },
    eyePatch: {
        type:Boolean,
        required: [true, "Pirate have eye patch?"]
    },
    hookHand: {
        type: Boolean,
        required: [true, "Pirate have hook hand?"]
    }
})

PirateSchema.plugin(uniqueValidatir, {message:"{PATH} is already registered!"})

const Pirate = mongoose.model("Pirate", PirateSchema)
module.exports = Pirate;