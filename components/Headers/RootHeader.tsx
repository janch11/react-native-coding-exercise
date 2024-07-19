import { FC } from "react";
import { StyleSheet, View } from "react-native";
import { AppLogo, PlanetIcon, RocketIcon } from "../../assets/vector";
import { colors } from "../../constants";

export const RootHeader: FC = () => {
  return (
    <View style={styles.container}>
      <PlanetIcon style={styles.planet} />
      <AppLogo style={styles.appLogo} />
      <RocketIcon style={styles.rocket} />
      <View style={styles.absoluteBackground}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundColor: colors.sandYellow,
    height: 141,
    width: "100%"
  },
  absoluteBackground: {
    backgroundColor: colors.darkBlue,
    height: "94%",
    width: "100%",
    top: 0,
    left: 0,
    position: "absolute",
  },
  appLogo: {
    margin: 0,
    marginTop: 10,
    zIndex: 1,
    width: "48.2%",
    height: "100%",
  },
  rocket: {
    margin: 0,
    width: "17.5%",
    height: "150%",
    zIndex: 1,
  },
  planet: {
    marginLeft: "8%",
    zIndex: 1,
    width: "9.8%",
    height: "10%",
  },
});
