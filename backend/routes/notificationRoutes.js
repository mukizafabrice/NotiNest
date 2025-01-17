import express from "express";
import notificationController from "../controllers/notificationController.js";

const router = express.Router();

router.post("/notifications", notificationController.createNotification);
router.get("/notifications", notificationController.getAllNotifications);
router.delete("/deleteNotification/:id", notificationController.deleteN);
router.put(
  "/notifications/:id/read",
  notificationController.markNotificationAsRead
);

export default router;
