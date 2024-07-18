import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../../constants";

import {
  TableHeader,
  FilterMenu,
  FilterByText,
  SortAndFilter,
  Pagination,
  LaunchesList

} from "../../../components";
import { useQuery } from "@apollo/client";
import { GET_LAUNCHES_PAST } from "../../../api/queries";
import { useState } from "react";

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
    sort: "rocket",
  };

  const { loading, error, data, fetchMore, refetch } = useQuery(
    GET_LAUNCHES_PAST,
    {
      variables: queryVariables,
    }
  );

  if (error) {
    <View>Error</View>;
  }

  return (
    <View style={styles.container}>
      {isFilterMenuOpen && (
        <FilterMenu
          isFilterMenuOpen={isFilterMenuOpen}
          setIsFilterMenuOpen={setIsFilterMenuOpen}
          selectedColumn={selectedColumn}
          setSelectedColumn={setSelectedColumn}
        ></FilterMenu>
      )}
      <TableHeader />
      <FilterByText
        setLaunchFind={setLaunchFind}
        queryVariables={queryVariables}
        refetch={refetch}
      ></FilterByText>
      <SortAndFilter
        order={order}
        setOrder={setOrder}
        setIsFilterMenuOpen={setIsFilterMenuOpen}
        selectedColumn={selectedColumn}
      ></SortAndFilter>
      <LaunchesList
        loading={loading}
        data={data}
        selectedColumn={selectedColumn}
        setSelectedColumn={setSelectedColumn}
      ></LaunchesList>
      <Pagination
        limit={limit}
        currentOffset={currentOffset}
        setCurrentOffset={setCurrentOffset}
        queryVariables={queryVariables}
        data={data}
        fetchMore={fetchMore}
      ></Pagination>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: colors.sandYellow,
  },
});
