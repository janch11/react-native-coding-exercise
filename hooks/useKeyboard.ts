import { useEffect, useState } from "react";
import { Keyboard } from "react-native";

export const useKeyboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const listeners = [
      Keyboard.addListener("keyboardDidShow", () => {
        setIsOpen(true);
        setIsTransitioning(false);
      }),
      Keyboard.addListener("keyboardDidHide", () => {
        setIsOpen(false);
        setIsTransitioning(false);
      }),
      Keyboard.addListener("keyboardWillHide", () => setIsTransitioning(true)),
      Keyboard.addListener("keyboardWillShow", () => setIsTransitioning(true)),
    ];

    return () => listeners.forEach((listener) => listener.remove());
  }, [setIsOpen]);

  return { isOpen, isTransitioning };
};
