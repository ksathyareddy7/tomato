import { AppFonts, Colors } from "@/styles/constants";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, Text, TextInput, View } from "react-native";

export function SearchBar() {
  return (
    <View style={styles.container}>
      <View style={styles.greetingContainer}>
        <Text style={styles.username}>Hey User, </Text>
        <Text style={styles.greeting}>Good Afternoon!</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Search dishes, restaurants"
        />
        <Feather
          name="search"
          size={18}
          color={Colors.TextPlaceholder}
          style={styles.searchIcon}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  greetingContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  username: {
    fontFamily: AppFonts.Poppins400,
    fontSize: 16,
  },
  greeting: {
    fontFamily: AppFonts.Poppins600,
    fontSize: 16,
  },
  input: {
    width: "100%",
    fontFamily: AppFonts.Poppins400,
    backgroundColor: Colors.White200,
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 20,
    paddingLeft: 50,
    marginBottom: 10,
    fontSize: 14,
  },
  searchIcon: {
    position: "absolute",
    top: 20,
    left: 20,
  },
});
