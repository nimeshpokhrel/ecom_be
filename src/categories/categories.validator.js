const { z } = require("zod");
const { logger } = require("../config/logger");
const { errorResponse } = require("../utils/response.utils");

const CategoryValidationSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .max(10)
    .min(3),
});

const categoryValidator = {
  ValidateCreateCategory: (req, res, next) => {
    const parsedSchema = CategoryValidationSchema.safeParse(req.body);
    if (!parsedSchema.success) {
      logger.error(parsedSchema);
      return errorResponse(res, "Validation Error", parsedSchema.error, 409);
    } else {
      next();
    }
  },
};

module.exports = { categoryValidator };
