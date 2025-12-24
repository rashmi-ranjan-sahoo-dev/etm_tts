import app from "./app.js"
import dotenv from "dotenv";
import { pool } from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT || 3000

// Test database connection
pool.getConnection()
  .then(connection => {
    console.log("✅ Database connected successfully");
    connection.release();
  })
  .catch(error => {
    console.error("❌ Database connection failed:", error.message);
  });


app.listen(PORT, () => {
     console.log(`🚀 Server running on http://localhost:${PORT}`);
})