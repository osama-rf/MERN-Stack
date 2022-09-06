const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
require('./server/routes/route')(app);
require('./server/config/mongoose.config');

app.listen(8005, () => {
    console.log("Listening at the port 8006")
})