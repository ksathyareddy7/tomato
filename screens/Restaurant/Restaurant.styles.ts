import { AppFonts, Colors } from "@/styles/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  bottomContainer: {
    padding: 16,
    backgroundColor: "white",
  },
  deliveryDetails: {
    marginTop: 10,
  },
  restaurantName: {
    fontFamily: AppFonts.Poppins700,
    fontSize: 20,
    marginVertical: 10,
  },
  restaurantDescription: {
    fontFamily: AppFonts.Poppins400,
    color: Colors.TextSeconday,
  },
  filterList: {
    paddingVertical: 16,
    paddingLeft: 20,
  },
  categoryTitle: {
    fontFamily: AppFonts.Poppins500,
    fontSize: 18,
    marginBottom: 20,
  },
  categoryListContainer: {
    padding: 16,
  },
  cardContainer: {
    flex: 1,
    backgroundColor: Colors.White100,
    shadowOffset: {
      height: 3,
      width: 3,
    },
    shadowColor: "#bdbdbd",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    borderRadius: 20,
    marginBottom: 20,
  },
  itemImage: {
    height: 100,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  cardBottomContainer: {
    padding: 8,
  },
  itemTitle: { fontFamily: AppFonts.Poppins600, fontSize: 18 },
  itemDescription: {
    fontFamily: AppFonts.Poppins400,
    color: Colors.TextSeconday,
  },
  itemPrice: {
    fontFamily: AppFonts.Poppins500,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  addToCart: {
    backgroundColor: Colors.Orange,
    padding: 10,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
