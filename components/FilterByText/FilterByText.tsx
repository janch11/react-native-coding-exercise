import { StyleSheet, View } from "react-native";
import { Button } from "../Button";
import { Input } from "../Input";

interface FilterByTextProps {
  setLaunchFind: (arg0: string) => void;
  refetch: (arg0: object) => void;
  queryVariables: object;
  placeholder: string,
}

export const FilterByText = (props: FilterByTextProps) => {
  return (
    <View style={styles.filterByTextContainer}>
      <Input
        withRocketIcon
        onChange={(v: string) => {
          props.setLaunchFind(v);
        }}
        placeholder={props.placeholder}
      />
      <Button
        onPress={() => {
          props.refetch(props.queryVariables);
        }}
        type="secondary"
        text="SEARCH"
      />
    </View>
  );
};

const styles = StyleSheet.create({

    filterByTextContainer: {
      width: "100%",
      justifyContent: "space-around",
      flexDirection: "row",
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 10,
      paddingRight: 10,
    },
    
  });
  
