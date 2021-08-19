import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Components
import CreateBlogScreen from "./screens/CreateBlogScreen";
import BlogDetailScreen from "./screens/BlogDetailScreen";
import BlogsList from "./screens/BlogsList";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#621FF7",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="CreateBlogScreen"
        component={CreateBlogScreen}
        options={{ title: "Create a New Blog" }}
      />
      <Stack.Screen
        name="BlogsList"
        component={BlogsList}
        options={{ title: "Blogs List" }}
      />
      <Stack.Screen
        name="BlogDetailScreen"
        component={BlogDetailScreen}
        options={{ title: "Blog Detail" }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
