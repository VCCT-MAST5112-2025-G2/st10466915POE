import React, { useState } from "react";
import { Button, FlatList, Image, StyleSheet, Text, View } from "react-native";
import { MenuItem, useMenu } from "../context/MenuContext";

// Memoized card component for each menu item
const MenuCard = React.memo(({ item }: { item: MenuItem }) => (
  <View style={styles.card}>
    {item.image && <Image source={item.image} style={styles.image} resizeMode="cover" />}
    <Text style={styles.name}>{item.dishName}</Text>
    <Text>{item.description}</Text>
    <Text style={styles.price}>${item.price.toFixed(2)}</Text>
  </View>
));

export default function GuestScreen() {
  const { menuItems } = useMenu();
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const filtered = selectedCourse
    ? menuItems.filter((i) => i.course === selectedCourse)
    : menuItems;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guest Menu</Text>

      <View style={styles.filters}>
        {["Starters", "Mains", "Desserts"].map((course) => (
          <Button
            key={course}
            title={course}
            color="#FF6B35"
            onPress={() => setSelectedCourse(course)}
          />
        ))}
        <Button title="All" color="#999" onPress={() => setSelectedCourse(null)} />
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MenuCard item={item} />}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFDF7", padding: 16 },
  title: { fontSize: 20, fontWeight: "bold", color: "#FF6B35", marginBottom: 12 },
  filters: { flexDirection: "row", justifyContent: "space-around", marginBottom: 10 },

  card: {
    backgroundColor: "#fff",
    padding: 12,
    marginVertical: 8,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },

  image: {
    width: "100%",
    height: 150,
    borderRadius: 12,
    marginBottom: 8,
  },

  name: { fontSize: 16, fontWeight: "bold" },
  price: { color: "#FF6B35", fontWeight: "600" },
});


