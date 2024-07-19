import { View, Pressable, StyleSheet, Text } from "react-native";
import { FilterIcon, SortIcon } from "../../../assets/vector";
import { colors } from "../../../constants";

interface SortAndFilterProps {
  selectedColumn: string;
  setIsFilterMenuOpen: (arg0: boolean) => void;
  order: string;
  setOrder: (arg0: string) => void;
}

export const SortAndFilter = (props: SortAndFilterProps) => {
  const renderFilterLabel = () => {
    if (props.selectedColumn === "rocketName") {
      return "ROCKET NAME";
    } else if (props.selectedColumn === "rocketType") {
      return "ROCKET TYPE";
    } else if (props.selectedColumn === "launchYear") {
      return "LAUNCH YEAR";
    } else if (props.selectedColumn === "missionName") {
      return "MISSION NAME";
    }
  };
  return (
    <View style={styles.sortAndFiltersContainer}>
      <View style={styles.filtersWrapper}>
        <Pressable
          style={styles.filtersIconWrapper}
          onPressIn={() => props.setIsFilterMenuOpen(true)}
        >
          <FilterIcon style={styles.filtersIcon} />
        </Pressable>
        <View style={styles.filterWrapper}>
          <Text style={styles.filtersText}> {renderFilterLabel()}</Text>
          <Pressable
            onPress={() =>
              props.order === "asc"
                ? props.setOrder("desc")
                : props.setOrder("asc")
            }
          >
            <SortIcon
              style={[
                styles.sortIcon,
                props.order === "desc" && styles.sortIconDesc,
              ]}
            />
          </Pressable>
        </View>
      </View>
      <View style={styles.filtersLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  sortAndFiltersContainer: {
    height: 45,
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
  },
  filtersWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
  filterWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  sortIcon: {
    width: 15,
    height: 15,
  },
  sortIconDesc: {
    transform: [{ rotateX: "180deg" }],
  },
  filtersLine: {
    height: 6,
    width: "100%",
    marginTop: 5,
    marginBottom: 15,
    backgroundColor: colors.darkBlue,
    borderRadius: 10,
  },
  filtersText: {
    fontSize: 15,
    paddingRight: 15,
    fontWeight: "bold",
    color: colors.darkBlue,
  },
  filtersIcon: {
    width: 15,
    height: 15,
    marginBottom: 10,
  },
  filtersIconWrapper: {
    position: "absolute",
    left: "5%",
  },
});
