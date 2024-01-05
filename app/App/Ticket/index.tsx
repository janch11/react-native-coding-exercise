import { router } from "expo-router";
import { StyleSheet, View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Ticket() {
  return (
    <SafeAreaView>
      <View>
        <Text>Ticket Screen</Text>
        <Button 
          title={"Go Back"} 
          onPress={() => 
            router.back()
        }/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ });
