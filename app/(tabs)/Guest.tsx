import React, { useCallback, useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MenuCard from "../components/MenuCard";
import { MenuItem, useMenu } from "../context/MenuContext";

export default function GuestScreen() {
  const { menuItems } = useMenu();
  const [selectedCourse, setSelectedCourse] = useState<MenuItem["course"] | null>(null);

  const filteredMenu = selectedCourse
    ? menuItems.filter((item) => item.course === selectedCourse)
    : menuItems;

  const renderItem = useCallback(
    ({ item }: { item: MenuItem }) => <MenuCard item={item} />,
    []
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guest Menu</Text>

      <View style={styles.filters}>
        {(["Starters", "Mains", "Desserts"] as const).map((course) => (
          <Button
            key={course}
            title={course}
            color="#FF6B35"
            onPress={() => setSelectedCourse(course)}
          />
        ))}
        <Button
          title="All"
          color="#999"
          onPress={() => setSelectedCourse(null)}
        />
      </View>

      <FlatList
        data={filteredMenu}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        initialNumToRender={8}
        maxToRenderPerBatch={8}
        windowSize={5}
        removeClippedSubviews
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDF7",
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FF6B35",
    marginBottom: 12,
  },
  filters: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
});



