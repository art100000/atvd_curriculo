import { NavButton } from "@/components/navButton";
import { View, Text, StyleSheet } from "react-native";

export default function Academico() {
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <NavButton label="Home" to="/" />
        <NavButton label="Sobre mim" to="/aboutMe" />
        <NavButton label="Acadêmico" to="/academics" />
        <NavButton label="Profissional" to="/professional" />
      </View>
      <Text style={styles.title}>Formação Acadêmica</Text>

      <View style={styles.card}>
        <Text style={styles.course}>Curso: Informática</Text>
        <Text style={styles.institution}>Instituição: IFPE</Text>
        <Text style={styles.year}>2021 — 2024</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.course}>Curso: Desenvolvimento Web</Text>
        <Text style={styles.institution}>Plataforma: Udemy</Text>
        <Text style={styles.year}>2023 — 2024</Text>
      </View>
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
    backgroundColor: "#222",
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 25,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#333",
    padding: 18,
    borderRadius: 12,
    marginBottom: 20,
  },
  course: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  institution: {
    color: "#ccc",
    fontSize: 16,
    marginTop: 6,
  },
  year: {
    color: "#aaa",
    marginTop: 8,
  },
});
