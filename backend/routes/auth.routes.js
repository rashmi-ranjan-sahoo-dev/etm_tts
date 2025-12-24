import express from "express";
import { signup, login } from "../controllers/auth.controller.js";

const router = express.Router();

/**
 * @route   POST /api/auth/signup
 * @desc    First-time signup using ID
 * @access  Public
 */
router.post("/signup", signup);

/**
 * @route   POST /api/auth/login
 * @desc    Login using ID & password
 * @access  Public
 */
router.post("/login", login);

export default router;
