const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema(
    {
        setup: {
            type: String,
            required: [true, "Setup is required"],
            minlength: [10, "Setup must be at least 10 chars long"]
        },
        punchline: {
            type: String,
            required: [true, "you can't tell a joke witout a punchline!"],
            minlength: [3, "punchline must be at least 3 chars long"]
        }
    },
    {timestamps: true}
);

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;