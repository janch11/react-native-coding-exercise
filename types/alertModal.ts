import { Href } from "expo-router";

export type AlertModalParams = {
  title: string;
  message: string;
  buttonText?: string;
  sendToOnConfirm?: Href<"pathname">;
};
