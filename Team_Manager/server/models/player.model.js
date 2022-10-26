const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            minlength: [2, "Name must be 2 or more characters"]
        },
        position: {
            type: String,
        },
        game1: {type: Number, default: 0},
        game2: {type: Number, default: 0},
        game3: {type: Number, default: 0}
    },
    {timestamps: true}
);

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;