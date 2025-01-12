import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { CircleBackButton, PrimaryButton } from "../components/Buttons";
import { AppFonts, Colors } from "@/styles/constants";
import { Feather, Ionicons } from "@expo/vector-icons";
import { I_CartItem } from "@/data/helpers";
import { useContext } from "react";
import { StoreContext } from "@/storeSetup";
import { ActionType } from "@/store";

export function CartScreen() {
  const {
    store: { cart },
  } = useContext(StoreContext);
  const total = cart.reduce(
    (total, item) => total + item.quantity * +item.price,
    0
  );
  return (
    <View style={styles.rootContainer}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ padding: 16 }}>
          <View style={styles.topBar}>
            <CircleBackButton />
            <Text style={styles.cartText}>Cart</Text>
          </View>
          <ScrollView style={styles.scrollView}>
            {cart.map((item, index) => (
              <CartItem item={item} key={`${item.id + index}`} />
            ))}
          </ScrollView>
        </View>
        <View style={styles.bottomSheetContainer}>
          <View style={styles.row1}>
            <Text style={styles.textDeliveryAddress}>DELIVERY ADDRESS</Text>
            <TouchableOpacity>
              <Text style={styles.editText}>EDIT</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.textInput}
            editable={false}
            value="Flat No: 214, Raheja Apartments, Madhapur"
          />
          <View style={styles.row2}>
            <View style={styles.totalContainer}>
              <Text style={styles.textTotal}>TOTAL :</Text>
              <Text style={styles.totalAmount}>₹{total.toFixed(2)}</Text>
            </View>
            <View style={styles.breakdownContainer}>
              <Text style={styles.textBreakdown}>Breakdown</Text>
              <Feather name="chevron-right" size={20} color={Colors.Blue} />
            </View>
          </View>
          <PrimaryButton
            title="PLACE ORDER"
            onPress={() => Alert.alert("opens payment screen")}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: Colors.Blue,
    flex: 1,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
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
    paddingTop: 40,
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

function CartItem({ item }: { item: I_CartItem }) {
  const { dispatch } = useContext(StoreContext);
  const handleAddToCart = () => {
    dispatch({
      type: ActionType.ADD_ITEM,
      payload: {
        item,
      },
    });
  };

  const handleReduceQuantity = () => {
    dispatch({
      type: ActionType.REDUCE_ITEM,
      payload: {
        item,
      },
    });
  };
  const handleRemoveFromCart = () => {
    dispatch({
      type: ActionType.REMOVE_ITEM,
      payload: {
        item,
      },
    });
  };
  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <View style={styles.cardRow1}>
          <Text style={styles.itemTitle}>{item.title?.substring(0, 20)}</Text>
          <Ionicons
            name="close"
            size={18}
            color={Colors.White100}
            style={styles.removeItem}
            onPress={handleRemoveFromCart}
          />
        </View>
        <Text style={styles.itemTotalPrice}>
          ₹ {(item.quantity * +item.price).toFixed(2)}
        </Text>
        <View style={styles.addRemoveContainer}>
          <TouchableWithoutFeedback>
            <Feather
              name="minus"
              size={16}
              color={Colors.White100}
              style={styles.addRemoveButton}
              onPress={handleReduceQuantity}
            />
          </TouchableWithoutFeedback>
          <Text style={styles.itemQuantity}>{item.quantity}</Text>
          <TouchableWithoutFeedback onPress={handleAddToCart}>
            <Feather
              name="plus"
              size={16}
              color={Colors.White100}
              style={styles.addRemoveButton}
            />
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
}
