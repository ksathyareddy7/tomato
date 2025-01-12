import { Text, TouchableWithoutFeedback, View } from "react-native";
import { Header } from "./components/Header";
import { useLocalSearchParams } from "expo-router";
import { I_Restaurant, restaurantsData } from "@/data/data";
import { I_Item } from "@/data/helpers";
import { Colors } from "@/styles/constants";
import { DeliveryDetails } from "../components/DeliveryDetails";
import { Feather, Ionicons } from "@expo/vector-icons";
import { PrimaryButton } from "../components/Buttons";
import { useContext, useState } from "react";
import { StoreContext } from "@/storeSetup";
import { ActionType } from "@/store";
import { ConfirmationModal } from "./components/ConfirmationModal";
import { styles } from "./Dish.styles";

export function DishDetails() {
  const { restaurantId, dishId } = useLocalSearchParams();
  const [modalVisible, setModalVisible] = useState(false);
  const restaurant: I_Restaurant = restaurantsData[+restaurantId - 1];
  const dish: I_Item = restaurant.items.find((item) => item.id === +dishId)!;
  const {
    store: { cart },
    dispatch,
  } = useContext(StoreContext);
  const currentItemInCart = cart.find((item) => item.id === +dishId);
  const firstItemInCart = cart[0];

  const handleAddToCart = () => {
    if (firstItemInCart && firstItemInCart.restaurantId !== +restaurantId) {
      setModalVisible(true);
    } else {
      dispatch({
        type: ActionType.ADD_ITEM,
        payload: {
          item: dish,
        },
      });
    }
  };

  const handleReplace = () => {
    setModalVisible(false);
    dispatch({
      type: ActionType.REPLACE_CART,
      payload: {
        item: dish,
      },
    });
  };

  const handleRemoveFromCart = () => {
    dispatch({
      type: ActionType.REDUCE_ITEM,
      payload: {
        item: dish,
      },
    });
  };

  return (
    <View style={styles.container}>
      <Header item={dish} />
      <View style={{ padding: 16 }}>
        <Text style={styles.dishName}>{dish.title}</Text>
        <View style={styles.restaurantContainer}>
          <Ionicons
            name="restaurant-outline"
            size={16}
            color={Colors.Orange}
            style={styles.restaurantsIcon}
          />
          <Text style={styles.restaurantName}>{restaurant.name}</Text>
        </View>
        <DeliveryDetails item={restaurant} style={styles.deliveryDetails} />
        <Text style={styles.dishDescription}>{dish.description}</Text>
      </View>
      <View style={styles.bottomSheetContainer}>
        <View style={styles.row}>
          <Text style={styles.price}>₹{dish.price}</Text>
          <View style={styles.addRemoveContainer}>
            <TouchableWithoutFeedback>
              <Feather
                name="minus"
                size={16}
                color={Colors.White100}
                style={styles.addRemoveButton}
                onPress={handleRemoveFromCart}
              />
            </TouchableWithoutFeedback>
            <Text style={styles.itemQuantity}>
              {currentItemInCart?.quantity || "0"}
            </Text>
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
        <PrimaryButton title="ADD TO CART" onPress={handleAddToCart} />
      </View>
      <ConfirmationModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        handleReplace={handleReplace}
      />
    </View>
  );
}
