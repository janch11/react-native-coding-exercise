import { useRouter } from "expo-router";
import { useEffect } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => router.replace("/App/Root"), 5000);
  }, [router]);

  return (
    <SafeAreaView style={styles.wrap}>
      <View style={styles.logoWrap}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1, alignItems: "center", justifyContent: "flex-start" },
  logoWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    maxHeight: "25%",
  },
  lottieWrap: {
    flex: 1,
    maxHeight: "50%",
  },
});
