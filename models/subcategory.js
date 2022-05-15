const mongoose = require("mongoose");

const subCategorySchema = mongoose.Schema({
  category_id: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  subcategory: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const subCategoryModel = mongoose.model("subcategory", subCategorySchema);
module.exports = subCategoryModel;
