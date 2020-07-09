import React, { useEffect, useRef, useState } from "react";
import { Animated, Dimensions } from "react-native";
import { Container } from "./styles";
import LottieView from "lottie-react-native";

const { height } = Dimensions.get("window");

export default function Loading(props) {
  const [top, setTop] = useState(new Animated.Value(0));
  const [opacity, setOpacity] = useState(new Animated.Value(0));

  useEffect(() => {
    if (props.isActive) {
      Animated.timing(top, {
        toValue: 0,
        duration: 0,
        useNativeDriver: false,
      }).start();
      Animated.timing(opacity, {
        toValue: 1,
        useNativeDriver: false,
      }).start();

      animationRef.current.play();
    } else {
      Animated.timing(top, {
        toValue: height,
        duration: 0,
        useNativeDriver: false,
      }).start();
      Animated.timing(opacity, {
        toValue: 0,
        useNativeDriver: false,
      }).start();

      animationRef.current.loop = false;
    }
  }, [props.isActive]);

  const animationRef = useRef();

  return (
    <AnimatedContainer
      style={{
        opacity: opacity,
        top: top,
      }}
    >
      <LottieView
        source={require("../../../assets/lottie-loading-fluid.json")}
        autoPlay={false}
        loop={true}
        ref={animationRef}
      />
    </AnimatedContainer>
  );
}

const AnimatedContainer = Animated.createAnimatedComponent(Container);
