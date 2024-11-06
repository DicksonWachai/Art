import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function Contact() {
  return (
    <View style={styles.container}>
          <Text style={styles.text}>Contact</Text>
          <Link href="/about" style={styles.button}>Go to About</Link>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#25292e",
    },
    text: {
        color: "#fff",
    }, button: {
        color: "#fff",
        fontWeight: "500",
        marginTop: 20,
        textDecorationLine: "underline",
    }
})