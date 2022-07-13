const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    requried: true,
  },
  message: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.models.Form || mongoose.model("Form", FormSchema);
