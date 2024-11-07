import { StyleSheet } from "react-native";
import { Image, type ImageSource } from "expo-image";

type Props = {
    imgSrc: ImageSource;
    selectedImage?: string;
}

export default function ImageViewer({ imgSrc, selectedImage }: Props) { 
    const ImageSource = selectedImage ? { uri: selectedImage } : imgSrc;
    return (
        <Image source={ImageSource} style={styles.image} />
    );
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    }
})