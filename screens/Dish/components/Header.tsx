import { I_Item } from "@/data/helpers";
import { CircleBackButton, GoToCartButton } from "@/screens/components/Buttons";
import { ImageBackground, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Header({ item }: { item: I_Item }) {
  return (
    <ImageBackground source={{ uri: item.image }} style={styles.bgImage}>
      <SafeAreaView style={styles.topContainer}>
        <CircleBackButton />
        <GoToCartButton type="light" />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bgImage: {
    height: 300,
    width: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: "hidden",
    objectFit: "cover",
  },
  topContainer: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
