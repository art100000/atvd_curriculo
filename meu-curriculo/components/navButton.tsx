import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useRouter,Href } from "expo-router";

type Props = {
  label: string;
  to: Href; 
};

export function NavButton({ label, to }: Props) {
  const router = useRouter();

  return (
    <TouchableOpacity style={styles.button} onPress={() => router.push(to)}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 8,
    marginBottom: 10,
  },
  text: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
});
