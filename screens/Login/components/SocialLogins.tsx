import { Alert, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { FontAwesome } from "@expo/vector-icons";

export function SocialLogins() {
  const handleSocialLogin = () => {
    Alert.alert("Redirect's to social site for login.");
  };
  return (
    <View style={styles.socialContainer}>
      <TouchableOpacity
        onPress={handleSocialLogin}
        style={[styles.socialButton, styles.facebook]}
      >
        <FontAwesome name="facebook" color={"white"} size={20} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleSocialLogin}
        style={[styles.socialButton, styles.twitter]}
      >
        <FontAwesome name="twitter" color={"white"} size={20} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleSocialLogin}
        style={[styles.socialButton, styles.apple]}
      >
        <FontAwesome name="apple" color={"white"} size={20} />
      </TouchableOpacity>
    </View>
  );
}
