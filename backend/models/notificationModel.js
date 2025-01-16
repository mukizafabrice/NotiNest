import db from "../database/database.js";  // Assuming you have a SQLite or other database connection

// Add a new notification
const addNotification = (title, content, appName, callback) => {
  const query = `INSERT INTO notifications (title, content, app_name) VALUES (?, ?, ?)`;
  db.run(query, [title, content, appName], function (err) {
    callback(err, this.lastID);
  });
};

// Fetch all notifications
const getNotifications = (callback) => {
  const query = `SELECT * FROM notifications ORDER BY timestamp DESC`;
  db.all(query, [], (err, rows) => {
    callback(err, rows);
  });
};

// Mark notification as read
const markAsRead = (id, callback) => {
  const query = `UPDATE notifications SET status = 'read' WHERE id = ?`;
  db.run(query, [id], callback);
};

export default { addNotification, getNotifications, markAsRead };
