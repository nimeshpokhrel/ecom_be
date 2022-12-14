const { successResponse, errorResponse } = require("../utils/response.utils");
const { categoryService } = require("./categories.index");

const categoriesController = {
  createCategory: async (req, res) => {
    const { name } = req.body;
    try {
      const createCategory = await categoryService.createCategory({name});
      return successResponse(res, "Category Created Successfully", {
        createCategory,
      });
    } catch (error) {
      return errorResponse(res, error.message ?? "Error Occured", {
        createCategory,
      });
    }
  },
};

module.exports = { categoriesController };
