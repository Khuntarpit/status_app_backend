const mongoose = require("mongoose");

const quoteSchema = mongoose.Schema({
  category_id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  subcategory_id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  quote: {
    type: String,
    required: true,
  },
});

const quoteModel = mongoose.model("quote", quoteSchema);

module.exports = quoteModel;
