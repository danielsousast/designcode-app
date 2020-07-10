import React from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import { Video } from "expo-av";
import { Ionicons } from "@expo/vector-icons";

import { Container, CloseView } from "./styles";

let { width } = Dimensions.get("window");

export default function VideoScreen({ navigation }) {
  return (
    <Container>
      <Video
        source={{
          uri:
            "https://player.vimeo.com/external/281472837.hd.mp4?s=c78b611b5055e373c69b6dd7674e2051128bc7b8&profile_id=175",
        }}
        shouldPlay
        useNativeControls={true}
        resizeMode="cover"
        style={{ width: width, height: 210 }}
      />
      <CloseView>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{ padding: 20 }}
        >
          <Ionicons name="ios-close" size={44} color="white" />
        </TouchableOpacity>
      </CloseView>
    </Container>
  );
}
