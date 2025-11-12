import { Tabs } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

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
            <View style={styles.header}>
              {/* Replace with your logo path */}
             <Image source={require("../../assets/logochris.png")} style={styles.logo} />


              <Text style={styles.title}>Christoffel’s Table</Text>
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

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 8,
    resizeMode: "contain",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FF6B35",
  },
});
