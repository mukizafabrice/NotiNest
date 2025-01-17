import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface NotificationItemProps {
  message: string;
  onMarkAsRead: () => void;
  onDelete: () => void;
  isRead: boolean;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  message,
  onMarkAsRead,
  onDelete,
  isRead,
}) => {
  return (
    <View style={[styles.notificationCard, isRead && styles.read]}>
      <Text style={styles.messageText} onPress={onMarkAsRead}>
        {message}
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onMarkAsRead}>
          <MaterialIcons
            name={isRead ? "check-circle" : "radio-button-unchecked"}
            size={24}
            color="#4CAF50"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onDelete}>
          <MaterialIcons name="delete" size={24} color="#FF5722" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationCard: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  read: {
    backgroundColor: "#E8F5E9",
  },
  messageText: {
    fontSize: 16,
    color: "#333",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 8,
  },
  button: {
    padding: 8,
    marginLeft: 12,
  },
});

export default NotificationItem;
