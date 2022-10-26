const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
            minlength: [3, "Title must be 3 or more characters"]
        },
        price: {
            type: Number,
            required: [true,"Price is required"]
        },

        description:{
            type: String,
            required: [true, "description is required"],
            minlength: [10, "description must be at least 10 characters long"]
        }
    },
    {timestamps: true}
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;