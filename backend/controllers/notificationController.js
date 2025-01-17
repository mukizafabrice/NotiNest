import Notification from '../models/notificationModel.js';  // Importing the model

// Add a new notification
const createNotification = (req, res) => {
  const { title, content, app_name } = req.body;
  Notification.addNotification(title, content, app_name, (err, id) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Notification added!", id });
  });
};

// Get all notifications
const getAllNotifications = (req, res) => {
  Notification.getNotifications((err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(rows);
  });
};

//delete notification
const deleteN = (req, res) => {
  const { id } = req.params;
  Notification.deleteNotification(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: "Notification deleted!" });
  });
}

// Mark notification as read
const markNotificationAsRead = (req, res) => {
  const { id } = req.params;
  Notification.markAsRead(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: "Notification marked as read!" });
  });
};

export default { createNotification, getAllNotifications, deleteN, markNotificationAsRead };
