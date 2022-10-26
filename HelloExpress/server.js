

const express = require("express");
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
// req is shorthand for request
// res is shorthand for response
app.get("/api", (req, res) => {
    res.json("Hello World123");
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );