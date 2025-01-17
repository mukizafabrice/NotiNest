import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import NotificationItem from "../components/NotificationItem";
import axios from "axios";

const Home = () => {
  const [notifications, setNotifications] = useState<any[]>([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/notifications"
        );
        setNotifications(response.data);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
  }, []);

  const markAsRead = async (id: number) => {
    try {
      await axios.put(`http://localhost:5000/api/notifications/${id}`, {
        read: true,
      });
      fetchNotifications();
    } catch (error) {
      console.error("Error marking notification as read:", error);
    }
  };

  const deleteNotification = async (id: number) => {
    try {
      await axios.delete(`http://localhost:5000/api/deleteNotification/${id}`);
      fetchNotifications();
    } catch (error) {
      console.error("Error deleting notification:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Notifications</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <NotificationItem
            message={item.message}
            onMarkAsRead={() => markAsRead(item.id)}
            onDelete={() => deleteNotification(item.id)}
            isRead={item.read}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: "#F5F5F5",
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
    color: "#212121",
    marginBottom: 20,
  },
});

export default Home;
