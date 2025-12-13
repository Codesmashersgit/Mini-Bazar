export const errorHandler = (err, req, res, next) => {
  console.error("Error:", err.message);
  console.error("Stack:", err.stack);

  // Axios errors (from product service calls)
  if (err.response) {
    return res.status(err.response.status || 500).json({
      success: false,
      message: err.response.data?.message || err.message || "External service error",
      error: process.env.NODE_ENV === "development" ? err.message : undefined
    });
  }

  // Network errors
  if (err.request) {
    return res.status(503).json({
      success: false,
      message: "Service unavailable. Please try again later.",
      error: process.env.NODE_ENV === "development" ? err.message : undefined
    });
  }

  // Default error
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal server error",
    error: process.env.NODE_ENV === "development" ? err.stack : undefined
  });
};