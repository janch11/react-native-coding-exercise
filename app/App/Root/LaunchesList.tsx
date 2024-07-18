import { View, ActivityIndicator, FlatList, StyleSheet } from "react-native";
import { LaunchItem } from "../../../types/LaunchItem";
import { TableItem } from "../../../components";

interface LaunchesListProps {
  loading: boolean;
  data: {
    launchesPast: LaunchItem[] | null | undefined;
  };
  selectedColumn: string,
  setSelectedColumn: (arg0: string) => void,
}

export const LaunchesList = (props: LaunchesListProps) => {
  const renderTableItemText = (item: LaunchItem) => {
    if (props.selectedColumn === "rocketName") {
      return item?.rocket?.rocket_name;
    } else if (props.selectedColumn === "rocketType") {
      return item?.rocket?.rocket_type;
    } else if (props.selectedColumn === "launchYear") {
      return item?.launch_year;
    } else if (props.selectedColumn === "missionName") {
      return item?.mission_name;
    } else {
      props.setSelectedColumn("rocketName");
      return item?.rocket?.rocket_name;
    }
  };

  return (
    <View style={styles.tableContainer}>
      {props.loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={props.data?.launchesPast}
          renderItem={({ item }) => (
            <TableItem
              item={item}
              text={renderTableItemText(item)}
            />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  tableContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "45%",
    paddingBottom: "2%",
  },
});
