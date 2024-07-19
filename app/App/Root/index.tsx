import { StyleSheet, View } from "react-native";
import { colors } from "../../../constants";

import { TableHeader, FilterByText } from "../../../components";
import { useQuery } from "@apollo/client";
import { GET_LAUNCHES_PAST } from "../../../api/queries";
import { useState } from "react";
import { LaunchesList } from "./LaunchesList";
import { Pagination } from "./Pagination";
import { FilterMenu } from "./FilterMenu";
import { SortAndFilter } from "./SortAndFilter";

export default function Root() {
  const limit = 5;
  const [currentOffset, setCurrentOffset] = useState(0);
  const [launchFind, setLaunchFind] = useState("");
  const [order, setOrder] = useState("asc");

  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState("rocketName");

  const queryVariables = {
    find: { mission_name: launchFind },
    limit,
    offset: currentOffset,
    order,
    sort: "launch_year",
  };

  const { loading, error, data, fetchMore, refetch } = useQuery(
    GET_LAUNCHES_PAST,
    {
      variables: queryVariables,
    }
  );

  if (error) {
    return <View>Error</View>;
  }

  return (
    <View style={styles.container}>
      {isFilterMenuOpen && (
        <FilterMenu
          isFilterMenuOpen={isFilterMenuOpen}
          setIsFilterMenuOpen={setIsFilterMenuOpen}
          selectedColumn={selectedColumn}
          setSelectedColumn={setSelectedColumn}
        />
      )}
      <TableHeader />
      <FilterByText
        setLaunchFind={setLaunchFind}
        queryVariables={queryVariables}
        refetch={refetch}
        placeholder="Search for flights"
      />
      <SortAndFilter
        order={order}
        setOrder={setOrder}
        setIsFilterMenuOpen={setIsFilterMenuOpen}
        selectedColumn={selectedColumn}
      />
      <LaunchesList
        loading={loading}
        data={data}
        selectedColumn={selectedColumn}
        setSelectedColumn={setSelectedColumn}
      />
      <Pagination
        limit={limit}
        currentOffset={currentOffset}
        setCurrentOffset={setCurrentOffset}
        queryVariables={queryVariables}
        data={data}
        fetchMore={fetchMore}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: colors.sandYellow,
  },
});
