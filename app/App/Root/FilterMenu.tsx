import { StyleSheet, View } from "react-native";
import OutsidePressHandler from "react-native-outside-press";
import { FilterItem } from "../../../components/FilterItem";
import { colors } from "../../../constants";

interface FilterMenuProps {
  setSelectedColumn: (arg0: string) => void;
  setIsFilterMenuOpen: (arg0: boolean) => void;
  isFilterMenuOpen: boolean;
  selectedColumn: string;
}

export const FilterMenu = (props: FilterMenuProps) => {
  const handlePress = (type: string) => {
    props.setSelectedColumn(type);
    props.setIsFilterMenuOpen(false);
  };

  return (
    <View style={styles.filterMenu}>
      <OutsidePressHandler
        onOutsidePress={() => {
          props.isFilterMenuOpen && props.setIsFilterMenuOpen(false);
        }}
      >
        <View style={styles.filterMenuContent}>
          {props.selectedColumn !== "rocketName" && (
            <FilterItem
              onPress={() => {
                handlePress("rocketName");
              }}
              text="ROCKET NAME"
            />
          )}
          {props.selectedColumn !== "rocketType" && (
            <FilterItem
              onPress={() => {
                handlePress("rocketType");
              }}
              text="ROCKET TYPE"
            />
          )}
          {props.selectedColumn !== "launchYear" && (
            <FilterItem
              onPress={() => {
                handlePress("launchYear");
              }}
              text="LAUNCH YEAR"
            />
          )}
          {props.selectedColumn !== "missionName" && (
            <FilterItem
              onPress={() => {
                handlePress("missionName");
              }}
              text="MISSION NAME"
            />
          )}
        </View>
      </OutsidePressHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  filterMenu: {
    width: 250,
    height: 248,

    backgroundColor: colors.darkBlue,
    position: "absolute",
    zIndex: 1,
    top: 160,
    left: 20,
  },
  filterMenuContent: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 30,
    justifyContent: "space-between",
  },
});
