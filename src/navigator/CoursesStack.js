import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Courses from "../screens/Courses";

const Stack = createStackNavigator();

export default function CoursesStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      mode="modal"
    >
      <Stack.Screen name="Courses" component={Courses} />
    </Stack.Navigator>
  );
}
