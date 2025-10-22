import { Tabs } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: "#FF6B35",
        tabBarStyle: { backgroundColor: "#FFFDF7" },
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          headerTitle: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
             
              <Text style={{ fontSize: 20, fontWeight: "bold", color: "#FF6B35" }}>
                Christoffel’s Table
              </Text>
            </View>
          ),
          tabBarIcon: () => <Text>🏠</Text>,
        }}
      />
      <Tabs.Screen
        name="Add"
        options={{ title: "Add Dish", tabBarIcon: () => <Text>➕</Text> }}
      />
      <Tabs.Screen
        name="Guest"
        options={{ title: "Guest View", tabBarIcon: () => <Text>👤</Text> }}
      />
    </Tabs>
  );
}




