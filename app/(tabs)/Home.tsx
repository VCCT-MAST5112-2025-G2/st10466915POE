import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MenuCard from "../components/MenuCard";
import { useMenu } from "../context/MenuContext";
import { calculateAverages } from "../utils/calculations";

export default function HomeScreen() {
  const { menuItems } = useMenu();
  const averages = calculateAverages(menuItems);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Full Menu</Text>

      <View style={styles.averages}>
        {Object.keys(averages).map((course) => (
          <Text key={course} style={styles.average}>
            Average {course}: ${averages[course].toFixed(2)}
          </Text>
        ))}
      </View>

      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MenuCard item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFDF7", padding: 16 },
  title: { fontSize: 20, fontWeight: "bold", color: "#FF6B35", marginBottom: 12 },
  averages: { marginBottom: 12 },
  average: { fontSize: 16, color: "#FF6B35", fontWeight: "600" },
});






