const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            minlength: [3, "Name must be 3 or more characters"]
        },
        image: {
            type: String,
            required: [true, "URL is required"]
            
        },
        treasure: {
            type: Number,
            required: [true, "You must indicate a number of treasure chests"],
            min: [0, "Value cannot be a negative number"]
            
        },
        catchphrase: {
            type: String,
            required: [true, "Catch Phrase is required"],
            minlength: [3, "Catch Phrase must be 3 or more characters"]
        },
        position: {
            type: String,
            required: [true, "Position is required"],
            minlength: [3, "Position must be 3 or more characters"]
        },
        pegleg: {
            type: Boolean,
            default: true
        },
        eyepatch: {
            type: Boolean,
            default: true
        },
        hookhand: {
            type: Boolean,
            default: true
        }
    },
    {timestamps: true}
);

const Pirate = mongoose.model("Pirate", PirateSchema);

module.exports = Pirate;