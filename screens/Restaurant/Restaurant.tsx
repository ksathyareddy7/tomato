import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { Header } from "./components/Header";
import { I_Restaurant, restaurantsData } from "@/data/data";
import { DeliveryDetails } from "../components/DeliveryDetails";
import { Colors } from "@/styles/constants";
import { useState } from "react";
import { FilterBadge } from "./components/FilterBadge";
import { Feather } from "@expo/vector-icons";
import { styles } from "./Restaurant.styles";
import {
  formatDataForColumns,
  getItemsByCategoryAndCategories,
  I_Item,
} from "@/data/helpers";

const ItemByCategory = ({ item, index }: { item: I_Item; index: number }) => {
  const router = useRouter();
  if (item.category === "blank-item") {
    return <View style={{ flex: 1 }} />;
  }
  const style: any = {};
  if (index % 2 === 0) {
    style.marginRight = 8;
  } else {
    style.marginLeft = 8;
  }
  const handleOnPress = () => {
    router.push({
      pathname: "/dish/[restaurantId]",
      params: {
        restaurantId: item.restaurantId!,
        dishId: item.id,
      },
    });
  };
  return (
    <TouchableOpacity
      style={[styles.cardContainer, style]}
      onPress={handleOnPress}
    >
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.cardBottomContainer}>
        <Text style={styles.itemTitle}>{item.title?.substring(0, 24)}</Text>
        <Text style={styles.itemDescription}>
          {item.description?.substring(0, 30)}
        </Text>
        <View style={styles.row}>
          <Text style={styles.itemPrice}>₹{item.price}</Text>
          <TouchableOpacity style={styles.addToCart} onPress={handleOnPress}>
            <Feather name="plus" size={18} color={Colors.White100} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export function RestaurantScreen() {
  const [selectedFilter, setSelectedFilter] = useState("");
  const { id } = useLocalSearchParams();
  const restaurant: I_Restaurant = restaurantsData[+id - 1];
  const { itemsByCategory, categories } = getItemsByCategoryAndCategories(
    restaurant.items
  );

  const selectedCategoryList = selectedFilter ? [selectedFilter] : categories;

  return (
    <FlatList
      data={[{ id: "1" }]}
      keyExtractor={(item) => item.id}
      style={{ backgroundColor: "white" }}
      renderItem={() => (
        <View>
          <Header item={restaurant} />
          <View style={styles.bottomContainer}>
            <DeliveryDetails item={restaurant} style={styles.deliveryDetails} />
            <Text style={styles.restaurantName}>{restaurant.name}</Text>
            <Text style={styles.restaurantDescription}>
              {restaurant.description}
            </Text>
          </View>
          <FlatList
            data={categories}
            renderItem={({ item }) => (
              <FilterBadge
                item={item}
                selected={selectedFilter}
                setSelected={setSelectedFilter}
              />
            )}
            keyExtractor={(item) => item}
            horizontal
            style={styles.filterList}
            showsHorizontalScrollIndicator={false}
          />
          {selectedCategoryList.map((category) => (
            <View key={category} style={styles.categoryListContainer}>
              <Text style={styles.categoryTitle}>
                {category} ({itemsByCategory[category].length})
              </Text>
              <FlatList
                data={formatDataForColumns(itemsByCategory[category], 2)}
                renderItem={({ item, index }) => (
                  <ItemByCategory item={item} index={index} />
                )}
                keyExtractor={(item) => `${item.id}`}
                showsVerticalScrollIndicator={false}
                numColumns={2}
              />
            </View>
          ))}
        </View>
      )}
    />
  );
}
