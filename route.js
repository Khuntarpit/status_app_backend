const express = require("express");
const { ObjectId } = require("mongoose").Types;
const router = express.Router();
const categoryModel = require("./models/category");
const subCategoryModel = require("./models/subcategory");
const quoteModel = require("./models/quote");

router.post("/create-quote", async (req, res) => {
  try {
    const isExist = await quoteModel.findOne({ quote: req.body.quote });
    if (isExist) {
      res.status(400).json({ message: "Quote already taken" });
    } else {
      const quoteInfo = await quoteModel.create(req.body);
      res
        .status(200)
        .json({ message: "Quote create successfully", data: quoteInfo });
    }
  } catch (err) {
    res.status(400).json({ message: "Something went wrong" });
  }
});

router.get("/get-quote", async (req, res) => {
  try {
    const updatedArray = [];
    const quoteInfo = await quoteModel.find().limit(10);
    for (let i = 0; i < quoteInfo.length; i++) {
      const element = JSON.parse(JSON.stringify(quoteInfo[i]));
      const categoryInfo = await categoryModel.findById(element.category_id);
      const subCategoryInfo = await subCategoryModel.findById(
        element.subcategory_id
      );
      const createObj = {
        ...element,
        category: categoryInfo?.category,
        subcategory: subCategoryInfo?.subcategory,
      };
      updatedArray.push(createObj);
    }

    res
      .status(200)
      .json({ message: "Quote get successfully", data: updatedArray });
  } catch (err) {
    console.log(`err`, err);
    res.status(400).json({ message: "Something went wrong" });
  }
});

router.delete("/delete-quote/:id", async (req, res) => {
  try {
    const isExist = await quoteModel.findById(req.params.id);
    if (!isExist) {
      res.status(400).json({ message: "Quote not found" });
    } else {
      const quoteInfo = await quoteModel.findByIdAndDelete(req.params.id);
      res
        .status(200)
        .json({ message: "Quote delete successfully", data: quoteInfo });
    }
  } catch (err) {
    res.status(400).json({ message: "Something went wrong" });
  }
});

router.post("/create-category", async (req, res) => {
  try {
    const isExist = await categoryModel.findOne({
      category: req.body.category,
    });
    if (isExist) {
      res.status(400).json({ message: "Category already taken" });
    } else {
      const categoryInfo = await categoryModel.create(req.body);
      res
        .status(200)
        .json({ message: "Category create successfully", data: categoryInfo });
    }
  } catch (err) {
    res.status(400).json({ message: "Something went wrong" });
  }
});

router.get("/get-category", async (req, res) => {
  try {
    const categoryInfo = await categoryModel.find().limit(10);
    if (categoryInfo.length < 0) {
      res.status(400).json({ message: "Category not found" });
    } else {
      res
        .status(200)
        .json({ message: "Category get successfully", data: categoryInfo });
    }
  } catch (err) {
    res.status(400).json({ message: "Something went wrong" });
  }
});

router.delete("/delete-category/:id", async (req, res) => {
  try {
    const isExist = await categoryModel.findById(ObjectId(req.params.id));
    if (!isExist) {
      res.status(400).json({ message: "Category not found" });
    } else {
      const categoryInfo = await categoryModel.findByIdAndDelete(req.params.id);
      res.status(200).json({
        message: "Category delete successfully",
        data: categoryInfo,
      });
    }
  } catch (err) {
    res.status(400).json({ message: "Something went wrong" });
  }
});

router.post("/create-subcategory", async (req, res) => {
  try {
    const isExist = await subCategoryModel.findOne({
      subcategory: req.body.subcategory,
    });
    if (isExist) {
      res.status(400).json({ message: "SubCategory not found" });
    } else {
      const subCategoryInfo = await subCategoryModel.create(req.body);
      res.status(200).json({
        message: "SubCategory create successfully",
        data: subCategoryInfo,
      });
    }
  } catch (err) {
    res.status(400).json({ message: "Something went wrong" });
  }
});

router.get("/get-subcategory", async (req, res) => {
  try {
    const updatedArray = [];
    const subCategoryInfo = await subCategoryModel.find().limit(10);
    for (let i = 0; i < subCategoryInfo.length; i++) {
      const element = JSON.parse(JSON.stringify(subCategoryInfo[i]));
      const categoryInfo = await categoryModel.findById(element.category_id);
      const createObj = {
        ...element,
        category: categoryInfo.category,
      };
      updatedArray.push(createObj);
    }

    if (updatedArray.length < 0) {
      res.status(400).json({ message: "Subcategory not found" });
    } else {
      res.status(200).json({
        message: "SubCategory get successfully",
        data: updatedArray,
      });
    }
  } catch (err) {
    res.status(400).json({ message: "Something went wrong" });
  }
});

router.delete("/delete-subcategory/:id", async (req, res) => {
  try {
    const isExist = await subCategoryModel.findById(req.params.id);
    if (!isExist) {
      res.status(400).json({ message: "SubCategory not found" });
    } else {
      const subCategoryInfo = await subCategoryModel.findByIdAndDelete(
        req.params.id
      );
      res.status(200).json({
        message: "Subcategory delete successfully",
        data: subCategoryInfo,
      });
    }
  } catch (err) {
    res.status(400).json({ message: "Something went wrong" });
  }
});

module.exports = router;
