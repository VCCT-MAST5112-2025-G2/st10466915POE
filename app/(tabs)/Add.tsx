import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useMenu } from "../context/MenuContext";

export default function AddScreen() {
  const { addMenuItem } = useMenu();
  const [dishName, setDishName] = useState("");
  const [description, setDescription] = useState("");
  const [course, setCourse] = useState("Starters");
  const [price, setPrice] = useState("");
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a New Dish</Text>

      <TextInput placeholder="Dish Name" style={styles.input} value={dishName} onChangeText={setDishName} />
      <TextInput placeholder="Description" style={styles.input} value={description} onChangeText={setDescription} />
      <TextInput placeholder="Course (Starters/Mains/Desserts)" style={styles.input} value={course} onChangeText={setCourse} />
      <TextInput placeholder="Price" style={styles.input} keyboardType="numeric" value={price} onChangeText={setPrice} />
      
      <Button
        title="Add Dish"
        color="#FF6B35"
        onPress={() => {
          if (!dishName || !price) return;
          addMenuItem({
            dishName,
            description,
            course,
            price: parseFloat(price),
           
          });
          setDishName(""); setDescription(""); setCourse("Starters"); setPrice(""); 
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFDF7", padding: 16 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 12, color: "#FF6B35" },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
});


