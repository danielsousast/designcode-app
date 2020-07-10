import React, { useState, useEffect } from "react";
import { Animated, Dimensions, StatusBar } from "react-native";
import { useDispatch } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import { store } from "../../store";
import {
  Container,
  Cover,
  Image,
  Title,
  Author,
  Text,
  CardTouch,
  CloseButton,
  Icon,
} from "./styles";

const { width, height } = Dimensions.get("window");
const tabBarHeight = 83;

export default function Project(props) {
  const [cardWidth, setCardWidth] = useState(new Animated.Value(315));
  const [cardHeight, setCardHeight] = useState(new Animated.Value(460));
  const [titleTop, setTitleTop] = useState(new Animated.Value(20));
  const [buttonOpacity, setButtonOpacity] = useState(new Animated.Value(0));
  const [cardOpened, setCardOpened] = useState(false);
  const [textHeight, setTextHeight] = useState(new Animated.Value(100));

  const dispatch = useDispatch();

  useEffect(() => {
    if (cardOpened) {
      store.dispatch({ type: "OPEN_CARD" });
    } else {
      store.dispatch({ type: "CLOSE_CARD" });
    }
  }, [cardOpened]);

  function openCard() {
    if (!props.canOpen) return;

    Animated.spring(cardWidth, {
      toValue: width,
      useNativeDriver: false,
    }).start();
    Animated.spring(cardHeight, {
      toValue: height - tabBarHeight,
      useNativeDriver: false,
    }).start();
    Animated.spring(titleTop, { toValue: 40, useNativeDriver: false }).start();
    Animated.timing(buttonOpacity, {
      toValue: 1,
      useNativeDriver: false,
    }).start();

    Animated.spring(textHeight, {
      toValue: 1000,
      useNativeDriver: false,
    }).start();

    StatusBar.setHidden(true);
    setCardOpened(true);
  }

  function closeCard() {
    Animated.spring(cardWidth, {
      toValue: 315,
      useNativeDriver: false,
    }).start();
    Animated.spring(cardHeight, {
      toValue: 460,
      useNativeDriver: false,
    }).start();
    Animated.spring(titleTop, { toValue: 20, useNativeDriver: false }).start();
    Animated.timing(buttonOpacity, {
      toValue: 0,
      useNativeDriver: false,
    }).start();

    Animated.spring(textHeight, {
      toValue: 100,
      useNativeDriver: false,
    }).start();

    StatusBar.setHidden(false);
    setCardOpened(false);
  }

  return (
    <CardTouch onPress={openCard}>
      <AnimatedContainer style={{ width: cardWidth, height: cardHeight }}>
        <Cover>
          <Image source={props.image} />
          <AnimatedTitle style={{ top: titleTop }}>{props.title}</AnimatedTitle>
          <Author>by {props.author}</Author>
        </Cover>
        <AnimatedText style={{ height: textHeight }}>{props.text}</AnimatedText>

        <AnimatedLinearGradient
          colors={["rgba(255,255,255, 0)", "rgba(255,255,255, 1)"]}
          style={{
            position: "absolute",
            top: 330,
            width: "100%",
            height: textHeight,
          }}
        />

        <AnimatedCloseButton
          style={{ opacity: buttonOpacity }}
          onPress={closeCard}
        >
          <Icon name="ios-close" size={32} color="#546bfb" />
        </AnimatedCloseButton>
      </AnimatedContainer>
    </CardTouch>
  );
}

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const AnimatedTitle = Animated.createAnimatedComponent(Title);

const AnimatedText = Animated.createAnimatedComponent(Text);

const AnimatedCloseButton = Animated.createAnimatedComponent(CloseButton);

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);
