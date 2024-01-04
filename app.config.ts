import { ExpoConfig, ConfigContext } from "@expo/config";
import * as dotenv from "dotenv";

dotenv.config();

const BuildConfig = ({ config }: ConfigContext): ExpoConfig => {
  return {
    ...config,
    name: "React Native Exercise",
    slug: "react-native-exercise",
    version: "1.0.1",
    extra: {
      // add environment vars here
      API_URL: process.env.API_URL,
    },
    owner: "hanekedesign",
  };
};

export default BuildConfig;
