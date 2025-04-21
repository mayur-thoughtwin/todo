const { ZodError } = require("zod");

const validate = (schema) => {
  return (req, res, next) => {
    try {
      const parsed = schema.parse(req.body); // Will throw if invalid
      req.body = parsed;
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        return res.status(400).json({
          message: "Validation failed",
          errors: err.errors.map((e) => ({
            field: e.path.join("."),
            message: e.message,
          })),
        });
      }

      next(err); 
    }
  };
};

module.exports = validate;

