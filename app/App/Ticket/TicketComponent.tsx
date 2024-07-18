import { router } from "expo-router";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Button } from "../../../components/Button";
import { BackButton } from "../../../assets/vector";
import { colors } from "../../../constants";
import { LaunchItem } from "../../../types/LaunchItem";



export const TicketComponent = () => {
  const [data, setData] = useState<LaunchItem>();

  const getTicketData = async () => {
    AsyncStorage.getItem("selectedLaunch").then((v) => {
      setData(JSON.parse(v as unknown as string));
    });
  };

  useEffect(() => {
    getTicketData();
  }, [data]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <View style={styles.missionName}>
            <Text style={styles.titleLabel}>Mission Name</Text>
            <Text style={styles.missionNameTitle}>{data?.mission_name}</Text>
          </View>
          <View style={styles.rocketDetails}>
            <View style={styles.rocketName}>
              <Text style={styles.titleLabel}>Rocket Name</Text>
              <Text style={styles.rocketDetailsTitle}>
                {data?.rocket?.rocket_name}
              </Text>
            </View>
            <View>
              <Text style={styles.titleLabel}>Rocket Type</Text>
              <Text style={styles.rocketDetailsTitle}>
                {data?.rocket?.rocket_type}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <Text style={[styles.titleLabel, styles.titleLabelBlue]}>
            LAUNCH DATE
          </Text>
          <Text style={styles.launchDateTitle}>{data?.launch_year}</Text>
        </View>
        <Pressable
          style={styles.backButton}
          onPress={() => router.push("/App/Root")}
        >
          <BackButton />
        </Pressable>
      </View>
      <Button
        style={styles.buttonPrint}
        type="secondary"
        text="PRINT TICKET"
        onPress={() => {}}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 595,
    height: 270,
    zIndex: 10,
    transform: [{ rotate: "90deg" }],
    position: "relative",
    flexDirection: "row",
  },
  leftContainer: {
    width: 475,
    paddingTop: "10%",
    paddingLeft: "9%",
  },
  rightContainer: {
    width: 130,
    paddingTop: "6%",
  },
  missionName: {
    paddingBottom: 30,
  },
  titleLabel: {
    fontSize: 7,
    color: colors.lightSandYellow,
  },
  titleLabelBlue: {
    color: colors.darkBlue,
  },
  missionNameTitle: {
    fontSize: 20,
    color: colors.lightSandYellow,
  },
  rocketDetailsTitle: {
    fontSize: 9,
    color: colors.lightSandYellow,
  },
  launchDateTitle: {
    paddingTop: 10,
    fontSize: 14,
    color: colors.darkBlue,
  },
  rocketDetails: {
    flexDirection: "row",
  },
  rocketName: {
    paddingRight: 40,
  },
  buttonPrint: {
    position: "absolute",
    top: 180,
  },
  backButton: {
    position: "absolute",
    bottom: -40,
    left: -80,
    width: 48,
    height: 48,
    transform: [{ rotate: "270deg" }],
  },
});
