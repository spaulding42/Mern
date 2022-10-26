const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
app.use(cors())
require("./server/config/mongoose.config")
app.use(express.json(), express.urlencoded({extended: true}))

const AllProductRoutes = require('./server/routes/product.routes');

AllProductRoutes(app)

app.listen(port, () => console.log(`Listening on port: ${port}`) );