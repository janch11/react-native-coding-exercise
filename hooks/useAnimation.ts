import { useCallback, useEffect, useRef } from "react";
import { Animated } from "react-native";

type Args = {
  trigger: boolean;
  startValue: number;
  endValue: number;
  options?: Partial<Animated.TimingAnimationConfig>;
};

export const useAnimation = ({
  trigger,
  startValue,
  endValue,
  options = {},
}: Args) => {
  const value = useRef(new Animated.Value(startValue)).current;

  const forwards = useCallback(
    () =>
      Animated.timing(value, {
        toValue: endValue,
        useNativeDriver: true,
        ...options,
      }).start(),
    [endValue, value]
  );

  const backwards = useCallback(
    () =>
      Animated.timing(value, {
        toValue: startValue,
        useNativeDriver: true,
        ...options,
      }).start(),
    [startValue, value]
  );

  useEffect(() => {
    if (trigger) {
      forwards();
    } else {
      backwards();
    }
  }, [trigger, forwards, backwards]);

  return { value, forwards, backwards };
};
