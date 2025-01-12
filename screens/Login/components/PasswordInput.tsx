import {
  View,
  TextInput,
  Text,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import { Colors } from "@/styles/constants";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

interface IProps {
  style?: StyleProp<ViewStyle>;
  label: string;
  onChangeText?: ((text: string) => void) | undefined;
  value: string;
  error?: boolean;
}

export function PasswordInput({
  style,
  label,
  onChangeText,
  value,
  error,
}: IProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <View style={style}>
      <Text style={styles.inputLabel}>{label}</Text>
      <View>
        <TextInput
          style={[styles.input, error && styles.errorInput]}
          secureTextEntry={!showPassword}
          placeholder="***********"
          placeholderTextColor={Colors.TextPlaceholder}
          onChangeText={onChangeText}
          value={value}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setShowPassword((value) => !value)}
        >
          {!showPassword ? (
            <Ionicons name="eye" size={20} color="#B4B9CA" />
          ) : (
            <Ionicons name="eye-off-outline" size={20} color="#B4B9CA" />
          )}
        </TouchableOpacity>
      </View>
      {error && (
        <Text style={styles.errorText}>Invalid password. Try 12345678</Text>
      )}
    </View>
  );
}
