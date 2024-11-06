import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome</Text>
      <Link href="/about" style={styles.button}>Go to About</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "purple",
  },
  text: {
    color: "#fff",
    fontWeight: "500"
  }, button: {
    color: "#fff",
    fontWeight: "500",
    marginTop: 20,
    textDecorationLine: "underline",
  }
})