import { NavButton } from "@/components/navButton";
import { View, Text, StyleSheet } from "react-native";

export default function SobreMim() {
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <NavButton label="Home" to="/" />
        <NavButton label="Sobre mim" to="/aboutMe" />
        <NavButton label="Acadêmico" to="/academics" />
        <NavButton label="Profissional" to="/professional" />
      </View>
      <Text style={styles.title}>Sobre mim</Text>

      <View style={styles.card}>
        <Text style={styles.subTitle}>Quem sou eu?</Text>
        <Text style={styles.institution}>Eu sou Arthur Gonçalves Figueirôa, tenho 19 anos e estou cursando o 4° período de Sistemas para Internet. Atualmente, estagio em uma empresa de CRM para imobiliárias e estou focado em crescer como programador.</Text>
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
  subTitle: {
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
