const express = require("express");
const router = express.Router();
const categoryModel = require("./models/category");
const subCategoryModel = require("./models/subcategory");
const quoteModel = require("./models/quote");

router.get("/create-quote", async (req, res) => {
  res.render("quote.hbs");
});

router.post("/create-quote", async (req, res) => {
  try {
    const quoteInfo = await quoteModel.create(req.body);
    res.send({ message: "Quote create successfully", data: quoteInfo });
  } catch (err) {
    res.send({ message: "Failed", errro: err });
  }
});

router.get("/get-quote", async (req, res) => {
  try {
    const quoteInfo = await quoteModel.find();
    res.send({ message: "Quote get successfully", data: quoteInfo });
  } catch (err) {
    res.send({ message: "Failed", errro: err });
  }
});

router.get("/create-category", (req, res) => {
  res.render("category.hbs");
});

router.post("/create-category", async (req, res) => {
  try {
    const categoryInfo = await categoryModel.create(req.body);
    res.send({ message: "Category create successfully", data: categoryInfo });
  } catch (err) {
    res.send({ message: "Failed", errro: err });
  }
});

router.get("/get-category", async (req, res) => {
  try {
    const categoryInfo = await categoryModel.find();
    res.send({ message: "Category get successfully", data: categoryInfo });
  } catch (err) {
    res.send({ message: "Failed", errro: err });
  }
});

router.get("/create-subcategory", (req, res) => {
  res.render("subcategory.hbs");
});

router.post("/create-subcategory", async (req, res) => {
  try {
    const subCategoryInfo = await subCategoryModel.create(req.body);
    res.send({
      message: "SubCategory create successfully",
      data: subCategoryInfo,
    });
  } catch (err) {
    res.send({ message: "Failed", errro: err });
  }
});
router.get("/get-subcategory", async (req, res) => {
  try {
    const subCategoryInfo = await subCategoryModel.find();
    res.send({
      message: "SubCategory get successfully",
      data: subCategoryInfo,
    });
  } catch (err) {
    res.send({ message: "Failed", errro: err });
  }
});

module.exports = router;
