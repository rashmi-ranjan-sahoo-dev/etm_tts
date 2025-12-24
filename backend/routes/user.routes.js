import express from "express";
import { createUser, createEmployee } from "../controllers/user.controller.js";
import { auth } from "../middleware/auth.middleware.js";

const router = express.Router();

/**
 * @route   POST /api/users/create-user
 * @desc    Super Admin creates HR or Client
 * @access  SUPER_ADMIN
 */
// router.post("/create-user",auth(["SUPER_ADMIN"]),createUser);
router.post("/create-user",auth(["SUPER_ADMIN"]),createUser);

/**
 * @route   POST /api/users/create-employee
 * @desc    HR creates Employee
 * @access  HR
 */
router.post("/create-employee",auth(["HR"]),createEmployee);

/**
 * @route   GET /api/users
 * @desc    Get all users (Admin)
 * @access  SUPER_ADMIN
 */
router.get("/",auth(["SUPER_ADMIN"]),async (req, res) => {
    const { pool } = await import("../config/db.js");
    const [rows] = await pool.execute(
      "SELECT id, user_id, role, is_activated, created_at FROM users"
    );
    res.json(rows);
  }
);

export default router;
