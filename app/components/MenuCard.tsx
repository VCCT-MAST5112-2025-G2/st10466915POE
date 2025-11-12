import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { MenuItem } from "../context/MenuContext";

type MenuCardProps = {
  item: MenuItem;
  onRemove?: (id: string) => void;
};

export default function MenuCard({ item, onRemove }: MenuCardProps) {
  return (
    <View style={styles.card}>
      {item.image && <Image source={item.image} style={styles.image} />}
      <Text style={styles.name}>{item.dishName}</Text>
      <Text>{item.description}</Text>
      <Text style={styles.course}>{item.course}</Text>
      <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      {onRemove && <Button title="Remove" color="#FF6B35" onPress={() => onRemove(item.id)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: "#fff", padding: 12, marginVertical: 8, borderRadius: 12 },
  image: { width: "100%", height: 120, borderRadius: 8, marginBottom: 8 },
  name: { fontWeight: "bold", fontSize: 16 },
  course: { fontStyle: "italic", color: "#FF6B35" },
  price: { fontWeight: "600", color: "#FF6B35" },
});

