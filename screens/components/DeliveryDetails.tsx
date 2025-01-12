import { I_Restaurant } from "@/data/data";
import { AppFonts, Colors } from "@/styles/constants";
import { Feather } from "@expo/vector-icons";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

export function DeliveryDetails({
  item,
  style,
}: {
  item: I_Restaurant;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <View style={[styles.row, style]}>
      <View style={styles.rowItem}>
        <Feather name="star" color={Colors.Orange} size={18} />
        <Text style={styles.rowItemText}>{item.rating}</Text>
      </View>
      <View style={styles.rowItem}>
        <Feather name="truck" color={Colors.Orange} size={18} />
        <Text style={styles.rowItemText}>{item.deliveryType}</Text>
      </View>
      <View style={styles.rowItem}>
        <Feather name="clock" color={Colors.Orange} size={18} />
        <Text style={styles.rowItemText}>{item.deliveryTime} min</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 8,
  },
  rowItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 40,
  },
  rowItemText: {
    fontFamily: AppFonts.Poppins600,
    marginLeft: 8,
    fontSize: 16,
  },
});
