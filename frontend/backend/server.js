// backend/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import projectRoutes from "./routes/projectRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Sample API test route
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend working fine!" });
});

// 🔗 Project routes
app.use("/api/projects", projectRoutes);

// ✅ Start server directly (no Mongo needed)
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
