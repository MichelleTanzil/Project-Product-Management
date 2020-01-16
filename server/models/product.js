const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minlength: [4, "Title has a minimum length of 4 characters"]
    },
    price: {
      type: Number,
      required: [true, "Price is required"]
    },
    image: {
      type: String,
      default: ''
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
// create an object that contains methods for mongoose to interface with MongoDB
mongoose.model("Product", ProductSchema);