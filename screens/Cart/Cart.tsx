import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { CircleBackButton, PrimaryButton } from "../components/Buttons";
import { Colors } from "@/styles/constants";
import { Feather, Ionicons } from "@expo/vector-icons";
import { I_CartItem } from "@/data/helpers";
import { useContext, useState } from "react";
import { StoreContext } from "@/storeSetup";
import { ActionType } from "@/store";
import { styles } from "./Cart.styles";

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

export function CartScreen() {
  const [bottomSheetHeight, setBottomSheetHeight] = useState(0);
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
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={[
              styles.scrollView,
              { marginBottom: bottomSheetHeight + 20 },
            ]}
          >
            {cart.map((item, index) => (
              <CartItem item={item} key={`${item.id + index + item.price}`} />
            ))}
          </ScrollView>
        </View>
        <View
          style={styles.bottomSheetContainer}
          onLayout={(event) =>
            setBottomSheetHeight(event.nativeEvent.layout.height)
          }
        >
          <View style={styles.row1}>
            <Text style={styles.textDeliveryAddress}>DELIVERY ADDRESS</Text>
            <TouchableOpacity
              onPress={() => Alert.alert("opens address edit screen")}
            >
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
            <TouchableOpacity
              style={styles.breakdownContainer}
              onPress={() => Alert.alert("expands modal to show breakdown")}
            >
              <Text style={styles.textBreakdown}>Breakdown</Text>
              <Feather name="chevron-right" size={20} color={Colors.Blue} />
            </TouchableOpacity>
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
