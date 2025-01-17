import PushNotification from 'react-native-push-notification';
import axios from 'axios';

export const NotificationService = {
  setupNotificationListener: () => {
    // Check if PushNotification is available and configure it
    if (PushNotification) {
      PushNotification.configure({
        onNotification: async (notification: any) => {
          try {
            // Send notification data to backend
            await axios.post('http://192.168.1.2:5000/api/notifications', {  // Replace with your local IP
              message: notification.message,
            });
          } catch (error) {
            console.error('Error storing notification:', error);
          }
        },
        requestPermissions: true,
      });

      // Safely call getInitialNotification
      PushNotification.getInitialNotification()
        .then((notification) => {
          if (notification) {
            console.log('Initial notification:', notification);
          }
        })
        .catch((error) => {
          console.error('Error getting initial notification:', error);
        });
    } else {
      console.error('PushNotification is not initialized properly');
    }
  },
};
