import {
  GestureResponderEvent,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from "react-native";
import { FC, PropsWithChildren } from "react";
import { ButtonWrap } from "./ButtonWrap";
import { Colors, Fonts } from "../../constants";

type ButtonProps = {
  onPress: (e: GestureResponderEvent) => void;
  text?: string;
  style?: StyleProp<ViewStyle>;
  white?: boolean;
  disabled?: boolean;
} & PropsWithChildren;

export const Button: FC<ButtonProps> = ({
  style,
  onPress,
  text,
  children,
  white = false,
  disabled = false,
  ...props
}) => {
  return (
    <ButtonWrap
      style={[{ ...styles.contain, opacity: disabled ? 0.5 : 1 }, style]}
    >
      <Pressable
        disabled={disabled}
        style={[styles.pressable]}
        onPress={onPress}
        {...props}
      >
        {children ? (
          children
        ) : (
          <Text style={[styles.text]}>
            {text?.toUpperCase()}
          </Text>
        )}
      </Pressable>
    </ButtonWrap>
  );
};

const styles = StyleSheet.create({
  contain: {
    borderRadius: 4,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 60,
  },
  pressable: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlignVertical: "center",
    flexDirection: "row",
    gap: 5,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "bold",
    fontFamily: Fonts.FiraSansBold,
    letterSpacing: 1,
  },
  pressabeWhiteButton: {
    borderWidth: 1,
    borderColor: Colors.primaryPurple,
    borderRadius: 6,
  },
  textWhiteButton: {
    color: Colors.primaryPurple,
  },
});
