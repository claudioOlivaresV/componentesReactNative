import {useRef} from 'react';
import {Animated, Easing} from 'react-native';

export const useAnimation = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(0)).current;
  const fadeIn = ({duration = 300}, toValue = 1, callBack = () => {}) => {
    Animated.timing(animatedOpacity, {
      toValue,
      duration,
      useNativeDriver: true,
    }).start(() => {
      callBack;
    });
  };
  const fadeOut = ({duration = 300}, toValue = 0, callBack = () => {}) => {
    Animated.timing(animatedOpacity, {
      toValue,
      duration,
      useNativeDriver: true,
    }).start(() => {
      callBack;
    });
  };

  const starMovingTopPosition = ({
    initalPosition = 0,
    duration = 300,
    toValue = 0,
    easing = Easing.linear,
    callBack = () => {},
  }) => {
    animatedTop.setValue(initalPosition);
    Animated.timing(animatedTop, {
      toValue,
      duration,
      useNativeDriver: true,
      easing,
    }).start(() => {
      callBack;
    });
  };

  return {
    fadeIn,
    fadeOut,
    starMovingTopPosition,
    animatedOpacity,
    animatedTop,
  };
};
