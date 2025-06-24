// backend/routes/projectRoutes.js
import express from "express";
import { pool } from "../db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM projects ORDER BY created_at DESC");
    res.status(200).json(result.rows); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, description, imageUrl, liveUrl } = req.body;
    const result = await pool.query(
      "INSERT INTO projects (title, description, imageUrl, liveUrl) VALUES ($1, $2, $3, $4) RETURNING *",
      [title, description, imageUrl, liveUrl]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
