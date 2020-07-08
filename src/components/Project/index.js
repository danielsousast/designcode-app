import React from "react";
import { Container, Cover, Image, Title, Author, Text } from "./styles";

export default function Project(props) {
  return (
    <Container>
      <Cover>
        <Image source={props.image} />
        <Title>{props.title}</Title>
        <Author>by {props.author}</Author>
      </Cover>
      <Text>{props.text}</Text>
    </Container>
  );
}
