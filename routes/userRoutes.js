import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/authorize.js";
import {
  assignRole,
  deleteUser,
  getAllUsers,
  getMe,
} from "../controllers/userController.js";
const router = express.Router();

router.get("/me", authMiddleware, getMe);

router.patch("/assign-role", authMiddleware, authorize("admin"), assignRole);

router.delete(
  "/delete-user/:id",
  authMiddleware,
  authorize("admin"),
  deleteUser,
);

router.get("/users", authMiddleware, authorize("admin"), getAllUsers);

export default router;
