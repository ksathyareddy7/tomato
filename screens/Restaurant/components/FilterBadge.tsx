import { AppFonts, Colors } from "@/styles/constants";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface I_FilterProps {
  item: string;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

export const FilterBadge = ({ item, selected, setSelected }: I_FilterProps) => (
  <TouchableOpacity
    style={[styles.filterBadge, selected === item && styles.selectedBadge]}
    onPress={() => setSelected(selected !== item ? item : "")}
  >
    <Text
      style={[
        styles.badgeTitle,
        selected === item && styles.selectedBadgeTitle,
      ]}
    >
      {item}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  filterBadge: {
    borderRadius: 100,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  selectedBadge: {
    backgroundColor: Colors.Orange,
  },
  badgeTitle: {
    fontFamily: AppFonts.Poppins500,
  },
  selectedBadgeTitle: {
    color: Colors.White100,
  },
});
