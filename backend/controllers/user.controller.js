import { pool } from "../config/db.js";

/**
 * SUPER ADMIN → CREATE HR / CLIENT
 */
export const createUser = async (req, res) => {
  try {
    const { userId, role } = req.body;

    if (!userId || !role) {
      return res.status(400).json({ message: "userId and role required" });
    }

    await pool.execute(
      "INSERT INTO users (user_id, role, created_by) VALUES (?, ?, ?)",
      [userId, role, req.user.id]
    );

    res.json({
      message: "User created successfully",
      userId,
      role
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "User creation failed" });
  }
};

/**
 * HR → CREATE EMPLOYEE
 */
export const createEmployee = async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ message: "userId required" });
    }

    await pool.execute(
      "INSERT INTO users (user_id, role, created_by) VALUES (?, 'EMPLOYEE', ?)",
      [userId, req.user.id]
    );

    res.json({
      message: "Employee created successfully",
      userId
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Employee creation failed" });
  }
};

