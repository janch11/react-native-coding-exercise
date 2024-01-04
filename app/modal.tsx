import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Button } from "../components";

export default function ModalScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Button text="Close" onPress={router.back} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
});
