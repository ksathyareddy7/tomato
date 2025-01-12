import { GoToCartButton } from "@/screens/components/Buttons";
import { AppFonts, Colors } from "@/styles/constants";
import { Feather } from "@expo/vector-icons";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function TopBar() {
  return (
    <View style={styles.container}>
      {/* Navigation */}
      <TouchableOpacity
        style={styles.menuIconContainer}
        onPress={() => Alert.alert("Opens sidebar for navigation")}
      >
        <Feather name="menu" size={18} />
      </TouchableOpacity>
      {/* Address */}
      <TouchableOpacity
        onPress={() => Alert.alert("Opens address selection screen")}
      >
        <Text style={styles.deliverTo}>Deliver To</Text>
        <View style={styles.addressDropdown}>
          <Text style={styles.currentAddress}>Halal Lab office</Text>
          <Feather name="chevron-down" size={20} style={styles.chevron} />
        </View>
      </TouchableOpacity>
      {/* Cart */}
      <GoToCartButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", alignItems: "center" },
  menuIconContainer: {
    height: 46,
    width: 46,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ECF0F4",
    marginRight: 20,
  },
  addressContainer: {},
  deliverTo: {
    color: Colors.Orange,
    fontFamily: AppFonts.Poppins500,
  },
  addressDropdown: {
    flexDirection: "row",
  },
  currentAddress: {
    fontFamily: AppFonts.Poppins300,
  },
  chevron: {
    marginLeft: 4,
  },
});
