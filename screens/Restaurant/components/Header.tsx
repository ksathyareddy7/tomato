import { I_Restaurant } from "@/data/data";
import {
  CircleBackButton,
  CircleThreeDotMenu,
} from "@/screens/components/Buttons";
import { ImageBackground, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Header({ item }: { item: I_Restaurant }) {
  return (
    <ImageBackground source={{ uri: item.image }} style={styles.bgImage}>
      <SafeAreaView style={styles.topContainer}>
        <CircleBackButton />
        <CircleThreeDotMenu />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bgImage: {
    height: 300,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: "hidden",
  },
  topContainer: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
