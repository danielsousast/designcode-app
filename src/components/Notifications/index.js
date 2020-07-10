import React, { useState, useEffect } from "react";
import {
  ScrollView,
  SafeAreaView,
  Animated,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import {
  Container,
  CloseButton,
  Subtitle,
  Wrapper,
  Header,
  Logo,
  Date,
  DateContainer,
  Item,
  Title,
  Text,
} from "./styles";
import { useStore } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

import items from "../../data/notifications";

let { width } = Dimensions.get("window");
var cardWith = width - 40;
if (width > 500) {
  cardWith = 460;
}

export default function Notifications() {
  const [translateY, setTranslateY] = useState(new Animated.Value(30));
  const [opacity, setOpacity] = useState(new Animated.Value(0));
  const [top, setTop] = useState(new Animated.Value(3000));

  const store = useStore();

  useEffect(() => {
    if (store.getState().app.action == "openNotif") {
      Animated.parallel([
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: false,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(top, {
          toValue: 0,
          duration: 0,
          useNativeDriver: false,
        }),
      ]).start();
    }

    if (store.getState().app.action == "closeNotif") {
      Animated.parallel([
        Animated.spring(translateY, {
          toValue: 30,
          useNativeDriver: false,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(top, {
          toValue: 3000,
          duration: 0,
          useNativeDriver: false,
        }),
      ]).start();
    }
  }, [store.getState().app.action]);

  function closeNotif() {
    store.dispatch({ type: "CLOSE_NOTIF" });
  }

  return (
    <AnimatedContainer style={{ top: top }}>
      <TouchableOpacity
        onPress={closeNotif}
        style={{
          position: "absolute",
          top: 40,
          left: "50%",
          marginLeft: -22,
          zIndex: 100,
        }}
      >
        <CloseButton style={{ elevation: 20 }}>
          <Ionicons name="ios-close" size={44} color="#546bfb" />
        </CloseButton>
      </TouchableOpacity>
      <SafeAreaView>
        <ScrollView style={{ padding: 20 }}>
          <Wrapper>
            <Subtitle>New</Subtitle>
            {items.map((item, index) => (
              <AnimatedItem
                key={index}
                style={{
                  opacity: opacity,
                  transform: [{ translateY: translateY }],
                }}
              >
                <Header>
                  <Logo source={{ uri: item.logo }} resizeMode="contain" />
                  <Title>{item.title}</Title>
                  <DateContainer>
                    <Date>{item.date}</Date>
                  </DateContainer>
                </Header>
                <Text>{item.text}</Text>
              </AnimatedItem>
            ))}
          </Wrapper>
        </ScrollView>
      </SafeAreaView>
    </AnimatedContainer>
  );
}

const AnimatedItem = Animated.createAnimatedComponent(Item);
const AnimatedContainer = Animated.createAnimatedComponent(Container);
