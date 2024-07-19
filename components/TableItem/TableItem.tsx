import { Pressable, StyleSheet, Text, View, Alert } from "react-native";
import { colors } from "../../constants";
import { useState } from "react";
import { ChevronCircleRight } from "../../assets/vector";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface TableItemProps {
  text: string;
  item: object;
}

export const TableItem = (props: TableItemProps) => {
  const [isItemClicked, setIsItemClicked] = useState(false);
  const handlePressIn = () => {
    setIsItemClicked(true);
  };

  const handleOnLongPress = async () => {
    try {
      await AsyncStorage.setItem("selectedLaunch", JSON.stringify(props.item));
      router.push("App/Ticket");
    } catch (error) {
      Alert.alert("Error", "Fetching error, try again" + error);
    }
  };
  const handleOnPressOut = () => {
    setIsItemClicked(false);
  };
  return (
    <Pressable
      onPressIn={handlePressIn}
      onLongPress={handleOnLongPress}
      onPressOut={handleOnPressOut}
    >
      <View
        style={[styles.container, isItemClicked && styles.checkedContainer]}
      >
        <Text style={[styles.text, isItemClicked && styles.checkedText]}>
          {props.text}
        </Text>
        {isItemClicked && <ChevronCircleRight style={styles.chevron} />}
      </View>
    </Pressable>
  );
};

export default TableItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightSandYellow,
    height: 70,
    width: 246,
    marginLeft: 50,
    marginRight: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 10,
  },
  checkedContainer: {
    backgroundColor: colors.orangeRed,
    position: "relative",
  },
  text: {
    fontSize: 15,
  },
  checkedText: {
    color: colors.white,
  },
  chevronWrapper: {},
  chevron: {
    position: "absolute",
    top: 20,
    right: -40,
    width: 30.7,
    height: 30.7,
  },
});
