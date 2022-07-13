const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },
  email: {
    type: String,
    requried: [true, "Please enter your email id"],
  },
  message: {
    type: String,
    required: [true, "msg cannot be empty"],
  },
});

module.exports = mongoose.model("form", FormSchema);
