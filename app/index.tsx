import { useRouter } from "expo-router";
import { useEffect } from "react";
import { SafeAreaView, View } from "react-native";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => router.replace("/App/Root"), 5000);
  }, [router]);

  return (
    <SafeAreaView >
      <View/>
    </SafeAreaView>
  );
}


