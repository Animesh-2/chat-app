import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUSersForSidebar } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/",protectRoute ,getUSersForSidebar);

export default router;
