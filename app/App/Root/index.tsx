import { StyleSheet, Text, Button } from "react-native";
import { useDispatch } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";


export default function Root() {
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <Text>Root Screen</Text>
      <Button 
        title={"Go to Ticket Screen"} 
        onPress={() => 
          router.push("/App/Ticket")
      }/>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({ });