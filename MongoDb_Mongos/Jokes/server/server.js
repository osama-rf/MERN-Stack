const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./routes/jokes.routes");
require("./config/mongoose.config");

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use("/", router);

app.listen(8002, () => console.log(`Listening on port: 8002`));