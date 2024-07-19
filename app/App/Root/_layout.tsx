import { Slot } from "expo-router";
import { RootHeader } from "../../../components";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { colors } from "../../../constants";

export default function AppLayout() {
  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <RootHeader />
        <Slot />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.darkBlue,
  },
});
