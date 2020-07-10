import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import { Container, Mask, Border, Text, Image } from "./styles";

export default function CourseSection(props) {
  return (
    <Container>
      <Mask>
        <Image source={props.image} />
        <LinearGradient
          colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.5)"]}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        />
        <LinearGradient
          colors={["#3399ff", "#33e1ff"]}
          start={[0, 0]}
          end={[1, 0]}
          style={{
            position: "absolute",
            bottom: 0,
            height: 4,
            borderRadius: 2,
            width: props.progress * 100 + "%",
          }}
        />
        <Border />
        <Text>{props.title}</Text>
      </Mask>
    </Container>
  );
}
