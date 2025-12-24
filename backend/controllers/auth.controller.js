import { pool } from "../config/db.js";
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt"

/**
 * FIRST-TIME SIGNUP
 * userId + password + confirmPassword
 */

export const signup = async (req, res) => {
  try {
    const { userId, password, confirmPassword } = req.body;

    if (!userId || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const [[user]] = await pool.execute(
      "SELECT * FROM users WHERE user_id = ?",
      [userId]
    );

    if (!user) {
      return res.status(404).json({ message: "Invalid ID" });
    }

    if (user.is_activated) {
      return res.status(400).json({ message: "User already signed up" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.execute(
      "UPDATE users SET password = ?, is_activated = 1 WHERE user_id = ?",
      [hashedPassword, userId]
    );

    res.json({ message: "Signup successful" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Signup failed" });
  }
};

/**
 * LOGIN
 */
export const login = async (req, res) => {
  const { userId, password } = req.body;
    console.log(userId, password)

  try {
    const { userId, password } = req.body;

    if (!userId || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const [[user]] = await pool.execute(
      "SELECT * FROM users WHERE user_id = ?",
      [userId]
    );

    if (!user || !user.is_activated) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }



    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.SUPER_ADMIN_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      token,
      role: user.role,
      redirect:
        user.role === "SUPER_ADMIN" ? "/admin" :
        user.role === "HR" ? "/hr" :
        user.role === "EMPLOYEE" ? "/employee" :
        "/client"
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Login failed" });
  }
};
