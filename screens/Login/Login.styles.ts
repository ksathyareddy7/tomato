import { AppFonts, Colors } from "@/styles/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Blue,
  },
  flex: { flex: 1 },
  topContainer: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  checkbox: {
    borderRadius: 4,
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    color: Colors.White100,
    marginBottom: 10,
    fontFamily: AppFonts.Poppins600,
  },
  subtitle: {
    fontSize: 16,
    color: "#d4d4d4",
    marginBottom: 20,
    fontFamily: AppFonts.Poppins400,
  },
  bottomContainer: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.White100,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxText: {
    color: Colors.TextSeconday,
    fontSize: 14,
    marginLeft: 10,
    fontFamily: AppFonts.Poppins400,
  },
  link: {
    color: Colors.Orange,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: AppFonts.Poppins500,
  },
  signupContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    justifyContent: "center",
  },
  signupText: {
    fontFamily: AppFonts.Poppins400,
    color: Colors.TextPrimary,
    fontSize: 14,
    marginRight: 8,
  },
  or: {
    marginBottom: 20,
    fontFamily: AppFonts.Poppins500,
    color: Colors.TextSeconday,
    textAlign: "center",
  },
});
