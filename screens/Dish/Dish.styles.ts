import { AppFonts, Colors } from "@/styles/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.White100 },
  dishName: {
    fontFamily: AppFonts.Poppins700,
    fontSize: 20,
    marginVertical: 10,
  },
  restaurantContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  restaurantsIcon: {
    borderWidth: 1,
    borderRadius: 100,
    padding: 4,
    borderColor: Colors.Orange,
  },
  restaurantName: {
    fontFamily: AppFonts.Poppins500,
    fontSize: 16,
    marginLeft: 10,
  },
  deliveryDetails: { marginTop: 14, marginBottom: 14 },
  dishDescription: {
    fontFamily: AppFonts.Poppins400,
    color: Colors.TextSeconday,
  },
  bottomSheetContainer: {
    position: "absolute",
    zIndex: 100,
    bottom: 0,
    left: 0,
    right: 0,
    padding: 24,
    backgroundColor: "#CCD3DA",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  price: {
    fontFamily: AppFonts.Poppins500,
    fontSize: 28,
  },
  addRemoveContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.Blue,
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
  },
  addRemoveButton: {
    backgroundColor: "#41414F",
    padding: 4,
    borderRadius: 100,
  },
  itemQuantity: {
    color: Colors.White100,
    fontFamily: AppFonts.Poppins400,
    fontSize: 16,
    marginHorizontal: 10,
  },
});
