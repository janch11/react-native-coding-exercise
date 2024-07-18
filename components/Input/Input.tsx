import { View, StyleSheet, TextInput } from "react-native";
import { colors } from "../../constants";
import { SearchRocketIcon } from "../../assets/vector";

interface ButtonProps {
  placeholder: string;
  withRocketIcon?: boolean;
  onChange: (v:string) => void,
}

export const Input = (props: ButtonProps) => {
  return (
    <View>
      <TextInput
        style={[styles.input, props.withRocketIcon && styles.inputWithIcon]}
        placeholder={props.placeholder}
        onChangeText={props.onChange}
        placeholderTextColor={colors.lightSandYellow}
      ></TextInput>
      {props.withRocketIcon && <SearchRocketIcon style={styles.icon} />}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 33,
    width: 200,
    borderRadius: 50,
    position: "relative",
    backgroundColor: colors.darkBlue,
    color: colors.sandYellow,
  },
  inputWithIcon: {
    paddingLeft: 50,
  },
  icon: {
    width: 50,
    height: 50,
    position: "absolute",
    top: 3,
    left: 15,
  },
});
