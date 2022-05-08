const mongoose = require("mongoose");

const quoteSchema = mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  subcategory: {
    type: String,
    required: true,
  },
  quote: {
    type: String,
    required: true,
  },
});

const quoteModel = mongoose.model("quote", quoteSchema);

module.exports = quoteModel;
