import { NavButton } from "@/components/navButton";
import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function FuncaoExtra() {
  const [piada, setPiada] = useState("Clique para gerar uma piada!");

  async function gerarPiada() {
    try {
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await response.json();
      setPiada(data.value);
    } catch (error) {
      setPiada("Erro ao carregar piada.");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <NavButton label="Home" to="/" />
        <NavButton label="Sobre mim" to="/aboutMe" />
        <NavButton label="Acadêmico" to="/academics" />
        <NavButton label="Profissional" to="/professional" />
      </View>
      
      <Text style={styles.title}>Piadas do Chuck Norris</Text>

      <View style={styles.card}>
        <Text style={styles.joke}>{piada}</Text>
      </View>

      <Pressable style={styles.button} onPress={gerarPiada}>
        <Text style={styles.buttonText}>Gerar Piada</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: "#111",
  },
  title: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#222",
    padding: 18,
    borderRadius: 12,
    minHeight: 120,
    justifyContent: "center",
  },
  joke: {
    color: "#ddd",
    fontSize: 16,
    lineHeight: 22,
  },
  button: {
    backgroundColor: "#e63946",
    padding: 14,
    borderRadius: 10,
    marginTop: 25,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 18,
  },
});
