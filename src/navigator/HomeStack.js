import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useRoute, useNavigation } from "@react-navigation/native";

import Home from "../screens/Home";
import Section from "../screens/Section";
import VideoScreen from "../screens/Video";

const Stack = createStackNavigator();

export default function HomeStack() {
  const route = useRoute();
  const navigation = useNavigation();

  if (route.state && route.state.index > 0) {
    navigation.setOptions({ tabBarVisible: false });
  } else {
    navigation.setOptions({ tabBarVisible: true });
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      mode="modal"
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Section" component={Section} />
      <Stack.Screen name="Video" component={VideoScreen} />
    </Stack.Navigator>
  );
}
