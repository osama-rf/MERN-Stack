// STEP 1: install all needed dependancies 

npm init -y
npm install
npm i body-parser
npm install mongoose express
npm install axios
npm install react-router-dom@5
npm install cors
npm add bootstrap react-bootstrap // optional

// STEP 2: all necessary declarations in server.js
 
const bodyParser = require('body-parser')
const express = require("express");
const cors = require("cors")
const app = express();
const port = 8000;
const router = require("your_rotuer_path")
require("your configuarion file from Config folder")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/",router); // Enable Routing
app.use(cors()) // Enable cross site - Server and React  

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})

// STEP 3: Create Models, Controllers , Views and Config Folders
    // Part 1: Config script file inside "Configs" Folder

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/name_of_your_DB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));
    
    // Part 2: Config script file inside "Models" Folder
    
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({

    // Your on "Key":"type"
    // for example : 
    name: String,
    age: Number
} , {timestamps: true});

    // collection name in first Param , Wanted schema in second Param
    
const User = mongoose.model('User', UserSchema);
module.exports = User;


    // Part 3: Config script file inside "Controllers" Folder
    
module.exports = {
    functionName: (request , response) => {
        // your code here
    },
    functionName: (request , response) => {
        // your code here
    }
}

    // Part 4: Config script file inside "Routes" Folder
    const router = require("express").Router();
    
    // Note : Order is matter , params should be after normal paths
    
    router.get("your path here", your controller function here)
    router.post("your path here", your controller function here)
    router.put("your path here", your controller function here)
    router.delete("your path here", your controller function here)
    
    module.exports = router;
    
    
    // Code well ^_^ best of luck <3


    
