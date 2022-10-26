const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
app.use(cors())
require("./config/mongoose.config")
app.use(express.json(), express.urlencoded({extended: true}))

const AllPirateRoutes = require('./routes/pirate.routes');

AllPirateRoutes(app)

app.listen(port, () => console.log(`Listening on port: ${port}`) );