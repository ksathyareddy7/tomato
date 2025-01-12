import { StoreContext } from "@/storeSetup";
import { AppFonts, Colors } from "@/styles/constants";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useContext, useMemo } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function CircleBackButton() {
  const router = useRouter();
  return (
    <TouchableOpacity
      style={styles.circleContainer}
      onPress={() => router.back()}
    >
      <Feather name="chevron-left" size={28} />
    </TouchableOpacity>
  );
}

export function CircleThreeDotMenu() {
  return (
    <TouchableOpacity
      style={styles.circleContainer}
      onPress={() => Alert.alert("Opens menu")}
    >
      <MaterialCommunityIcons name="dots-horizontal" size={28} />
    </TouchableOpacity>
  );
}

interface I_PrimaryButtonProps {
  onPress: any;
  title: string;
}

export function PrimaryButton({ onPress, title }: I_PrimaryButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

export function GoToCartButton({ type = "dark" }: { type?: "dark" | "light" }) {
  const router = useRouter();
  const {
    store: { cart },
  } = useContext(StoreContext);
  const quantity = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);
  return (
    <TouchableOpacity
      style={[
        styles.cartContainer,
        type === "dark"
          ? { backgroundColor: Colors.Blue }
          : { backgroundColor: Colors.White100 },
      ]}
      onPress={() => router.push("/cart")}
    >
      <Feather
        name="shopping-bag"
        size={22}
        color={type === "dark" ? "white" : "black"}
      />
      <View style={styles.quantityContainer}>
        <Text style={styles.quantity}>{quantity}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  circleContainer: {
    height: 50,
    width: 50,
    borderRadius: 100,
    backgroundColor: Colors.White100,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "100%",
    backgroundColor: Colors.Orange,
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: "center",
  },
  buttonText: {
    fontFamily: AppFonts.Poppins600,
    color: Colors.White100,
    fontSize: 16,
    fontWeight: "600",
  },
  cartContainer: {
    marginLeft: "auto",
    height: 46,
    width: 46,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  quantityContainer: {
    height: 26,
    width: 26,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.Orange,
    position: "absolute",
    top: -4,
    right: -4,
  },
  quantity: {
    color: Colors.White100,
    fontFamily: AppFonts.Poppins500,
  },
});
