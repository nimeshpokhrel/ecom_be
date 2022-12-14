const { categoriesController } = require("./categories.controller");
const { categoryValidator } = require("./categories.validator");

const categoriesRouter = require("express").Router();

categoriesRouter.post(
  "/",
  categoryValidator.ValidateCreateCategory,
  categoriesController.createCategory
);

categoriesRouter.get("/", (req, res) => {
  return res.send("All Categories");
});

module.exports = { categoriesRouter };
