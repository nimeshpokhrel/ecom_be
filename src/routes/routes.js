const { categoriesRouter } = require("../categories/categories.route");

const router = require("express").Router();

router.use("/categories", categoriesRouter);

module.exports = router;
