import express from "express";
import bodyParser from "body-parser";
import notificationRoutes from "./routes/notificationRoutes.js";

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api", notificationRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
