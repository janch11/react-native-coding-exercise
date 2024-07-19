import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { colors } from "../../constants";

interface ButtonProps {
  text: string;
  type: "primary" | "secondary";
  onPress: () => void;
  style?: ViewStyle;
}

export const Button = (props: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.onPress();
      }}
    >
      <View
        style={[
          styles.button,
          (props.type === "primary" && styles.primaryButton) ||
            (props.type === "secondary" && styles.secondaryButton),
          props.style && { ...props.style },
        ]}
      >
        <Text
          style={[
            styles.text,
            props.type === "secondary" && styles.secondaryText,
          ]}
        >
          {props.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    height: 33,
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 50,
    position: "relative",
  },
  primaryButton: {
    backgroundColor: colors.darkBlue,
  },
  secondaryButton: {
    backgroundColor: colors.orangeRed,
    color: colors.white,
  },
  text: {
    color: colors.sandYellow,
  },
  secondaryText: {
    color: colors.white,
    fontWeight: "bold",
  },
});
