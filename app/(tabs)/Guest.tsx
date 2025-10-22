import React, { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { useMenu } from "../context/MenuContext";



export default function GuestScreen() {
  const { menuItems } = useMenu();
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const filtered = selectedCourse ? menuItems.filter((i) => i.course === selectedCourse) : menuItems;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guest Menu</Text>

      <View style={styles.filters}>
        {["Starters", "Mains", "Desserts"].map((course) => (
          <Button key={course} title={course} color="#FF6B35" onPress={() => setSelectedCourse(course)} />
        ))}
        <Button title="All" color="#999" onPress={() => setSelectedCourse(null)} />
      </View>

  <FlatList
  data={filtered}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <View style={styles.card}>
      
      <Text style={styles.name}>{item.dishName}</Text>
      <Text>{item.description}</Text>
      <Text style={styles.price}>${item.price.toFixed(2)}</Text>
    </View>
  )}
/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFDF7", padding: 16 },
  title: { fontSize: 20, fontWeight: "bold", color: "#FF6B35", marginBottom: 12 },
  filters: { flexDirection: "row", justifyContent: "space-around", marginBottom: 10 },
  card: { backgroundColor: "#fff", padding: 12, marginVertical: 8, borderRadius: 12 },
  
  name: { fontSize: 16, fontWeight: "bold" },
  price: { color: "#FF6B35", fontWeight: "600" },
});

