import React, { useState } from "react";
import { Alert, Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import MenuCard from "../components/MenuCard";
import { useMenu } from "../context/MenuContext";
import { calculateAverages } from "../utils/calculations";

export default function AddScreen() {
  const { menuItems, addMenuItem, removeMenuItem } = useMenu();
  const [dishName, setDishName] = useState("");
  const [description, setDescription] = useState("");
  const [course, setCourse] = useState("Starters");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const averages = calculateAverages(menuItems);

  const handleAdd = () => {
    if (!dishName.trim() || !price.trim()) {
      Alert.alert("Error", "Dish name and price are required");
      return;
    }

    const priceNum = parseFloat(price);
    if (isNaN(priceNum) || priceNum <= 0) {
      Alert.alert("Error", "Enter a valid price");
      return;
    }

    addMenuItem({
      dishName: dishName.trim(),
      description: description.trim(),
      course,
      price: priceNum,
      image: image.trim() ? { uri: image.trim() } : undefined,
    });

    setDishName(""); setDescription(""); setCourse("Starters"); setPrice(""); setImage("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Menu</Text>

      {/* Average Prices */}
      <View style={styles.averages}>
        {Object.keys(averages).map((c) => (
          <Text key={c} style={styles.average}>
            Average {c}: ${averages[c].toFixed(2)}
          </Text>
        ))}
      </View>

      {/* Form */}
      <TextInput placeholder="Dish Name" style={styles.input} value={dishName} onChangeText={setDishName} />
      <TextInput placeholder="Description" style={styles.input} value={description} onChangeText={setDescription} />
      <TextInput placeholder="Course" style={styles.input} value={course} onChangeText={setCourse} />
      <TextInput placeholder="Price" style={styles.input} keyboardType="numeric" value={price} onChangeText={setPrice} />
      <TextInput placeholder="Image URL (optional)" style={styles.input} value={image} onChangeText={setImage} />

      <Button title="Add Dish" color="#FF6B35" onPress={handleAdd} />

      {/* Menu List */}
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        style={{ marginTop: 16 }}
        renderItem={({ item }) => <MenuCard item={item} onRemove={removeMenuItem} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFDF7", padding: 16 },
  title: { fontSize: 20, fontWeight: "bold", color: "#FF6B35", marginBottom: 12 },
  averages: { marginBottom: 12 },
  average: { fontSize: 16, color: "#FF6B35", fontWeight: "600" },
  input: { borderWidth: 1, borderColor: "#ddd", borderRadius: 8, padding: 10, marginBottom: 10, backgroundColor: "#fff" },
});

