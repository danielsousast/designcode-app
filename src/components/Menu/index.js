import React, { useState, useEffect, useCallback } from "react";
import { Animated, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  Cover,
  Image,
  Title,
  Subtitle,
  Content,
  CloseView,
  Touchable,
  styles,
} from "./styles";
import MenuItem from "../MenuItem";
import { useSelector, useDispatch } from "react-redux";
import { closeMenu } from "../../store/actions/AppActions";

const { height, width } = Dimensions.get("window");

export default function Menu() {
  const [top, setTop] = useState(new Animated.Value(height));

  const action = useSelector((state) => state.app.action);

  const dispatch = useDispatch();

  useEffect(() => {
    if (action == "openMenu") {
      Animated.spring(top, {
        toValue: 54,
        useNativeDriver: false,
      }).start();
    }

    if (action == "closeMenu") {
      Animated.spring(top, {
        toValue: height,
        useNativeDriver: false,
      }).start();
    }
  }, [action]);

  function handleCloseMenu() {
    dispatch(closeMenu());
  }

  return (
    <Animated.View style={[{ top: top }, styles.container]}>
      <Cover>
        <Image source={require("../../../assets/background2.jpg")} />
        <Title>Daniel Sousa</Title>
        <Subtitle>Designer at LearnCode</Subtitle>
      </Cover>
      <Touchable onPress={handleCloseMenu}>
        <CloseView>
          <Ionicons name="ios-close" size={44} color="#546bfb" />
        </CloseView>
      </Touchable>

      <Content>
        {items.map((item, index) => (
          <MenuItem
            key={index}
            title={item.title}
            text={item.text}
            icon={item.icon}
          />
        ))}
      </Content>
    </Animated.View>
  );
}

const items = [
  {
    icon: "ios-settings",
    title: "Account",
    text: "settings",
  },
  {
    icon: "ios-card",
    title: "Billing",
    text: "payments",
  },
  {
    icon: "ios-compass",
    title: "Learn React",
    text: "start course",
  },
  {
    icon: "ios-exit",
    title: "Log out",
    text: "see you soon!",
  },
];
