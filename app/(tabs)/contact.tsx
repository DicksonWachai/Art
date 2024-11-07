import { View, Text, StyleSheet } from "react-native";

export default function Contact() {
  return (
    <View style={styles.container}>
          <Text style={styles.text}>Contact</Text>
          
    </View>
  );
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#CB9DF0",
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