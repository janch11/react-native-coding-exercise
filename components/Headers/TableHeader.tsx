import { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Banner } from "../../assets/vector";

export const TableHeader: FC = () => {
  return (
    <View style={styles.bannerWrapper}>
      <Banner style={styles.banner} />
    </View>
  );
};

const styles = StyleSheet.create({
  bannerWrapper: {
    width: "100%",
    height: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  banner: {
    width: "70%",
    height: 40,
  },
});
