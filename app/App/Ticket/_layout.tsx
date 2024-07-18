import { Slot } from "expo-router";
import { View, StyleSheet, ImageBackground } from "react-native";
import { TicketBackground, TicketPageBackground } from "../../../assets/vector";

const image = { uri: "https://legacy.reactjs.org/logo-og.png" };

export default function TicketLayout() {
  return (
    <View style={styles.backgroundContainer}>
      <ImageBackground
        style={styles.ticketPageBackground}
        resizeMode="cover"
        source={require("../../../assets/png/background.png")}
      >
        <TicketBackground style={styles.ticketBackground} />
         <Slot />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    height: "100%",
    width: "100%",
    position: "relative",
  },
  ticketPageBackground: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  ticketBackground: {
    height: 270,
    width: 595,
    position: "absolute",
    transform: [{ rotate: "90deg" }],
  },
});
