import React from "react";
import { Container, Image, Text } from "./styles";

export default function Logo(props) {
  return (
    <Container>
      <Image source={props.image} resizeMode="contain" />
      <Text>{props.text}</Text>
    </Container>
  );
}
