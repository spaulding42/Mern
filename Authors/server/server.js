const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
app.use(cors())
require("./config/mongoose.config")
app.use(express.json(), express.urlencoded({extended: true}))

const AllAuthorRoutes = require('./routes/author.routes');

AllAuthorRoutes(app)

app.listen(port, () => console.log(`Listening on port: ${port}`) );