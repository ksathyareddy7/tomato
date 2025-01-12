import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TopBar } from "./components/TopBar";
import { SearchBar } from "./components/SearchBar";
import { CategoriesList } from "./components/CategoriesList";
import { RestaurantsList } from "./components/RestaurantsList";

export function HomeScreen() {
  return (
    <>
      <StatusBar style="dark" />
      <FlatList
        data={[{ id: "1" }]}
        keyExtractor={(item) => item.id}
        renderItem={() => (
          <View style={{ backgroundColor: "white" }}>
            <SafeAreaView style={styles.container1}>
              <TopBar />
              <SearchBar />
            </SafeAreaView>
            <CategoriesList />
            <RestaurantsList />
          </View>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container1: { paddingHorizontal: 20, paddingTop: 20 },
});
