import { I_Restaurant, restaurantsData } from "@/data/data";
import { DeliveryDetails } from "@/screens/components/DeliveryDetails";
import { IStoreContext, StoreContext } from "@/storeSetup";
import { AppFonts, Colors } from "@/styles/constants";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useContext } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Item = ({ item }: { item: I_Restaurant }) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() =>
        router.push({
          pathname: "/restaurant/[id]",
          params: { id: item.id },
        })
      }
    >
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemCategories}>
          {item.categories.slice(0, 2).join(" - ")}
        </Text>
        <DeliveryDetails item={item} />
      </View>
    </TouchableOpacity>
  );
};

export function RestaurantsList() {
  const {
    store: { restaurants },
  } = useContext<IStoreContext>(StoreContext);
  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <Text style={styles.openRestaurants}>Open Restaurants</Text>
        <View style={styles.seeAllContainer}>
          <Text style={styles.seeAllText}>See All</Text>
          <Feather name="chevron-right" size={18} />
        </View>
      </View>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => `${item.id}`}
        style={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  row1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  openRestaurants: {
    fontFamily: AppFonts.Poppins400,
    fontSize: 16,
  },
  seeAllContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  seeAllText: {
    fontFamily: AppFonts.Poppins400,
  },
  listContainer: {
    padding: 20,
  },
  cardContainer: {
    width: "100%",
    marginBottom: 40,
  },
  itemImage: {
    height: 200,
    borderRadius: 20,
  },
  itemDetails: {
    padding: 10,
  },
  itemName: {
    fontFamily: AppFonts.Poppins600,
    fontSize: 18,
    marginTop: 4,
  },
  itemCategories: {
    fontFamily: AppFonts.Poppins400,
    color: Colors.TextSeconday,
    marginTop: 2,
  },
});
