import React from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { useMenu } from "../context/MenuContext";

export default function HomeScreen() {
  const { menuItems, removeMenuItem } = useMenu();
  const courses = ["Starters", "Mains", "Desserts"];

  const averages: Record<string, number> = {};
  courses.forEach((course) => {
    const items = menuItems.filter((i) => i.course === course);
    averages[course] =
      items.length > 0
        ? items.reduce((sum, i) => sum + i.price, 0) / items.length
        : 0;
  });

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Total Menu Items: {menuItems.length}</Text>

      {courses.map((course) => (
        <Text key={course} style={styles.average}>
          Average {course}: ${averages[course].toFixed(2)}
        </Text>
      ))}

      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            
            <Text style={styles.title}>{item.dishName}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.course}>{item.course}</Text>
            <Text style={styles.price}>${item.price.toFixed(2)}</Text>
            <Button title="Remove" onPress={() => removeMenuItem(item.id)} color="#FF6B35" />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFDF7", padding: 16 },
  subtitle: { fontSize: 16, marginBottom: 8, color: "#444" },
  average: { fontSize: 15, color: "#FF6B35", marginBottom: 4 },
  card: {
    backgroundColor: "#fff",
    padding: 12,
    marginVertical: 8,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  
  title: { fontSize: 18, fontWeight: "bold", color: "#1A1A1A" },
  description: { fontSize: 14, color: "#666" },
  course: { fontSize: 13, fontStyle: "italic", color: "#FF6B35" },
  price: { fontSize: 16, marginVertical: 4, fontWeight: "600" },
});


