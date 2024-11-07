import { View, Text, StyleSheet, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

type Props = {
    label: string;
    theme?: "primary",
    onPress?: () => void;
}

export default function Button({ label, theme, onPress }: Props) {
    if (theme === "primary") {
        return (
            <View style={[styles.buttonContainer, { borderWidth: 4, borderColor: "#F0C1E1", borderRadius: 18 }]}>
                <Pressable style={[styles.button, { backgroundColor: "#FDDBBB" }]} onPress={onPress}>
                    <FontAwesome name="picture-o" size={18} color="green" style={styles.buttonIcon} />
                    <Text style={[styles.buttonLabel, {color: "teal"}]}>{label}</Text>
                </Pressable>
            </View>
        )
    }
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 65,
        marginHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        padding: 3,
    },
    button: {
        borderRadius: 10,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    buttonLabel: {
        color: "#fff",
        fontSize: 16,
    },
    buttonIcon: {
        paddingRight: 8,
    },
})