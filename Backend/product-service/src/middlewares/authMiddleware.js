export const authMiddleware = (req, res, next) => {
  // simple dummy auth
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json({ message: "Unauthorized" });
  next();
};
