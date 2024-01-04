import { StyleProp, View, ViewStyle } from "react-native";
import { FC, PropsWithChildren } from "react";

type WrapProps = {
  style: StyleProp<ViewStyle>;
} & PropsWithChildren;

export const ButtonWrap: FC<WrapProps> = ({ style, children }) =>
  (
    <View style={style}>{children}</View>
  );
