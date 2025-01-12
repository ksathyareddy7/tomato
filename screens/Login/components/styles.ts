import { AppFonts, Colors } from "@/styles/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  inputLabel: {
    color: Colors.TextPrimary,
    fontSize: 14,
    fontFamily: AppFonts.Poppins400,
    marginBottom: 8,
  },
  input: {
    width: "100%",
    fontFamily: AppFonts.Poppins400,
    backgroundColor: Colors.White200,
    borderRadius: 8,
    paddingVertical: 24,
    paddingHorizontal: 20,
    marginBottom: 10,
    fontSize: 14,
  },
  eyeIcon: {
    position: "absolute",
    right: 20,
    bottom: 34,
  },
  errorInput: { borderColor: "red", borderWidth: 1 },
  errorText: {
    fontFamily: AppFonts.Poppins400,
    marginBottom: 10,
    color: "red",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  facebook: {
    backgroundColor: "#3B5998",
  },
  twitter: {
    backgroundColor: "#1DA1F2",
  },
  apple: {
    backgroundColor: "#000000",
  },
});
