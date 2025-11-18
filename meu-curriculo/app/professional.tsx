import { NavButton } from "@/components/navButton";
import { View, Text, StyleSheet } from "react-native";

export default function Sobre() {
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <NavButton label="Home" to="/" />
        <NavButton label="Sobre mim" to="/aboutMe" />
        <NavButton label="Acadêmico" to="/academics" />
        <NavButton label="Profissional" to="/professional" />
      </View>
      <Text style={styles.title}>Profissional</Text>

      <View style={styles.card}>
        <Text style={styles.text}>
          Sou um desenvolvedor focado em criar aplicativos com React Native e
          Expo. Tenho experiência em HTML, CSS, JavaScript, React, Expo Router, API Rest
          e estilização moderna.
        </Text>

        <Text style={styles.text}>
          Este aplicativo foi criado como portfólio, utilizando diversas telas,
          navegação por abas, animações e consumo de API externa.
        </Text>
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
    backgroundColor: "#1e1e1e",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#2d2d2d",
    padding: 20,
    borderRadius: 12,
  },
  text: {
    color: "#ddd",
    fontSize: 16,
    marginBottom: 15,
    lineHeight: 22,
  },
});
