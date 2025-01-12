import { I_Category } from "@/data/data";
import { IStoreContext, StoreContext } from "@/storeSetup";
import { AppFonts, Colors } from "@/styles/constants";
import { Feather } from "@expo/vector-icons";
import { useContext } from "react";
import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const Item = ({ item }: { item: I_Category }) => (
  <TouchableOpacity
    style={styles.cardContainer}
    onPress={() =>
      Alert.alert("Will open restuarnts by selected category screen")
    }
  >
    <Image source={{ uri: item.image }} style={styles.itemImage} />
    <View style={styles.itemDetails}>
      <Text style={styles.itemCategory}>{item.category}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.textStarting}>Starting</Text>
        <Text style={styles.textPrice}>₹ {item.price}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export function CategoriesList() {
  const {
    store: { categories },
  } = useContext<IStoreContext>(StoreContext);
  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <Text style={styles.allCategoriesText}>All Categories</Text>
        <View style={styles.seeAllContainer}>
          <Text style={styles.seeAllText}>See All</Text>
          <Feather name="chevron-right" size={18} />
        </View>
      </View>
      <FlatList
        data={categories}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => `${item.id}`}
        horizontal
        style={styles.listContainer}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  row1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  allCategoriesText: {
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
    paddingVertical: 20,
    paddingLeft: 20,
  },
  cardContainer: {
    width: SCREEN_WIDTH * 0.35,
    backgroundColor: Colors.White100,
    shadowOffset: {
      height: 3,
      width: 3,
    },
    shadowColor: "#bdbdbd",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    marginRight: 30,
    borderRadius: 20,
  },
  itemImage: {
    height: 100,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  itemDetails: {
    padding: 10,
  },
  itemCategory: {
    fontFamily: AppFonts.Poppins600,
    fontSize: 18,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
  },
  textStarting: {
    fontFamily: AppFonts.Poppins400,
    color: Colors.TextSeconday,
  },
  textPrice: {
    fontFamily: AppFonts.Poppins500,
  },
});
