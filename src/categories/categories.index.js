const categoriesModel = require("./categories.model");
const { CategoryService } = require("./categories.service");

const categoryService = new CategoryService(categoriesModel);

module.exports = { categoryService };
