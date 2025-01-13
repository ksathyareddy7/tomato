import { AppFonts, Colors } from "@/styles/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: Colors.Blue,
    flex: 1,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 20,
  },
  cartText: {
    color: Colors.White100,
    fontFamily: AppFonts.Poppins500,
    marginLeft: 20,
    fontSize: 20,
  },
  bottomSheetContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 24,
    backgroundColor: Colors.White200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  row1: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  textDeliveryAddress: {
    fontFamily: AppFonts.Poppins400,
    color: Colors.TextSeconday,
  },
  editText: {
    fontFamily: AppFonts.Poppins500,
    color: Colors.Orange,
    textDecorationColor: Colors.Orange,
    textDecorationLine: "underline",
  },
  textInput: {
    width: "100%",
    fontFamily: AppFonts.Poppins500,
    backgroundColor: Colors.White100,
    color: "#aaa",
    borderRadius: 8,
    paddingVertical: 24,
    paddingHorizontal: 20,
    marginBottom: 30,
    fontSize: 14,
  },
  row2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  totalContainer: { flexDirection: "row", alignItems: "center" },
  textTotal: {
    fontFamily: AppFonts.Poppins500,
    marginRight: 10,
    fontSize: 15,
    color: Colors.TextSeconday,
  },
  totalAmount: {
    fontFamily: AppFonts.Poppins500,
    fontSize: 24,
  },
  breakdownContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textBreakdown: {
    color: Colors.Orange,
    fontFamily: AppFonts.Poppins500,
  },
  scrollView: {
    paddingTop: 20,
  },
  cardContainer: {
    flex: 1,
    marginBottom: 20,
    flexDirection: "row",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 8,
    overflow: "hidden",
    objectFit: "cover",
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 12,
  },
  itemTitle: {
    flex: 1,
    color: Colors.White100,
    fontFamily: AppFonts.Poppins500,
    fontSize: 16,
    marginRight: 8,
  },
  removeItem: {
    padding: 4,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "red",
    backgroundColor: "red",
    alignSelf: "flex-start",
  },
  cardRow1: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemTotalPrice: {
    color: Colors.White100,
    fontFamily: AppFonts.Poppins600,
    fontSize: 20,
    marginTop: 10,
  },
  addRemoveContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.Blue,
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    alignSelf: "flex-end",
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
