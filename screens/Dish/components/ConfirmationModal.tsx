import { AppFonts, Colors } from "@/styles/constants";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Modal,
  Alert,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface IProps {
  modalVisible: boolean;
  setModalVisible: (val: boolean) => void;
  handleReplace: () => void;
}

export function ConfirmationModal({
  modalVisible,
  setModalVisible,
  handleReplace,
}: IProps) {
  return (
    <SafeAreaView style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={[styles.centeredView, styles.rootContainer]}>
          <View style={styles.container}>
            <Text style={styles.warningText}>
              Item from different restaurant. Do you want to replace and add to
              cart?
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.no}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>NO</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.yes} onPress={handleReplace}>
                <Text style={styles.buttonText}>YES</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  rootContainer: { backgroundColor: "rgba(18, 18, 35, 0.8)", padding: 20 },
  container: {
    padding: 16,
    backgroundColor: Colors.White100,
    borderRadius: 8,
  },
  warningText: {
    fontFamily: AppFonts.Poppins500,
    fontSize: 18,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  yes: {
    flex: 0.45,
    backgroundColor: "#118B50",
    borderRadius: 8,
  },
  no: {
    flex: 0.45,
    backgroundColor: "#F14A00",
    borderRadius: 8,
  },
  buttonText: {
    color: Colors.White100,
    fontFamily: AppFonts.Poppins600,
    fontSize: 16,
    textAlign: "center",
    paddingVertical: 10,
  },
});
