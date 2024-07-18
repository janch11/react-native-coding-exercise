import { StyleSheet, Text, View } from "react-native";
import { Button } from "../../../components/Button";
import { LaunchItem } from "../../../types/LaunchItem";
import { colors } from "../../../constants";

export const Pagination = (props: {
  data: { launchesPast: LaunchItem[] };
  currentOffset: number;
  fetchMore: (arg0: { variables: object }) => void;
  queryVariables: object;
  limit: number;
  setCurrentOffset: (arg0: number) => void;
}) => {
  return (
    <View style={styles.paginationContainer}>
      <View>
        <Text style={styles.pagination}>
          0 - {props.data?.launchesPast?.length}
        </Text>
      </View>
      <Button
        onPress={() => {
          if (props.currentOffset > props.data?.launchesPast?.length) return;
          props.fetchMore({
            variables: {
              ...props.queryVariables,
              limit: props.limit,
              offset: props.currentOffset + props.limit,
            },
          });
          props.setCurrentOffset(props.currentOffset + props.limit);
        }}
        type="secondary"
        text="LOAD MORE"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    width: 241,
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  pagination: {
    color: colors.darkBlue,
    fontWeight: "bold",
  },
});
