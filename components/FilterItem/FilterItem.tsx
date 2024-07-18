import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { colors } from "../../constants";

interface FilterItemProps {
  onPress: () => void;
  text: string;
}

export const FilterItem = (props: FilterItemProps) => {
  return (
    <Pressable onPress={props.onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 195,
    height: 53,
    borderRadius: 10,
    backgroundColor: colors.lightSandYellow,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.darkBlue,
    fontSize: 15,
    fontWeight: "bold"
  },
});
