import { View, TextInput, Text, StyleProp, ViewStyle } from "react-native";
import { styles } from "./styles";
import { Colors } from "@/styles/constants";

interface IProps {
  style?: StyleProp<ViewStyle>;
  label: string;
  onChangeText?: ((text: string) => void) | undefined;
  value: string;
  error?: boolean;
}

export function EmailInput({
  style,
  label,
  onChangeText,
  value,
  error,
}: IProps) {
  return (
    <View style={style}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        style={[styles.input, error && styles.errorInput]}
        textContentType="emailAddress"
        placeholder="example@gmail.com"
        placeholderTextColor={Colors.TextPlaceholder}
        onChangeText={onChangeText}
        value={value}
      />
      {error && <Text style={styles.errorText}>Invalid email address</Text>}
    </View>
  );
}
