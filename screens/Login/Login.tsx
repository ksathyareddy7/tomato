import { EmailInput } from "./components/EmailInput";
import { PasswordInput } from "@/screens/Login/components/PasswordInput";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Checkbox from "expo-checkbox";
import { useRouter } from "expo-router";
import { styles } from "./Login.styles";
import { SocialLogins } from "./components/SocialLogins";
import { PrimaryButton } from "../components/Buttons";

const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

interface IErrors {
  email: boolean;
  password: boolean;
}
const EMAIL = "user@email.com";
const PASSWORD = "12345678";

const initialErrorState: IErrors = {
  email: false,
  password: false,
};

export const LoginScreen = () => {
  const [email, setEmail] = useState<string>(EMAIL);
  const [password, setPassword] = useState<string>(PASSWORD);
  const [checked, setChecked] = useState<boolean>(false);
  const [errors, setErrors] = useState<IErrors>(initialErrorState);
  const router = useRouter();

  const handleLogin = () => {
    const newErrors: IErrors = { ...errors };
    if (!validateEmail(email)) {
      newErrors.email = true;
    }
    if (password !== PASSWORD) {
      newErrors.password = true;
    }
    if (Object.values(newErrors).some((val) => val)) {
      setErrors(newErrors);
      return;
    }
    router.replace("/home");
  };

  const handleEmail = (value: string) => {
    if (errors.email) {
      setErrors(initialErrorState);
    }
    setEmail(value);
  };
  const handlePassword = (value: string) => {
    if (errors.password) {
      setErrors(initialErrorState);
    }
    setPassword(value);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView style={styles.topContainer}>
        <Text style={styles.title}>Log In</Text>
        <Text style={styles.subtitle}>
          Please sign in to your existing account
        </Text>
      </SafeAreaView>
      <View style={styles.bottomContainer}>
        <EmailInput
          label="EMAIL"
          value={email}
          onChangeText={handleEmail}
          error={errors.email}
        />
        <PasswordInput
          label="PASSWORD"
          value={password}
          onChangeText={handlePassword}
          error={errors.password}
        />
        <View style={styles.row}>
          <View style={styles.checkboxContainer}>
            <Checkbox
              style={styles.checkbox}
              value={checked}
              onValueChange={setChecked}
            />
            <Text style={styles.checkboxText}>Remember me</Text>
          </View>
          <TouchableOpacity
            onPress={() => Alert.alert("Redirects to password reset")}
          >
            <Text style={styles.link}>Forgot Password</Text>
          </TouchableOpacity>
        </View>

        <PrimaryButton onPress={handleLogin} title="LOG IN" />

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don’t have an account?</Text>
          <TouchableOpacity onPress={() => Alert.alert("Redirects to sign up")}>
            <Text style={styles.link}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.or}>OR</Text>
        <SocialLogins />
      </View>
    </View>
  );
};
