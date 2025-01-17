import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar, Platform } from "react-native";
import Home from "./pages/Home";
import { NotificationService } from "./services/NotificationService";

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    NotificationService.setupNotificationListener(); // Initialize notifications when app starts
  }, []);

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"}
        backgroundColor="#fff"
      />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
