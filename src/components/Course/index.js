import React, { useState, useEffect } from "react";
import {
  Container,
  Cover,
  Image,
  Logo,
  Content,
  Avatar,
  Caption,
  Author,
  Subtitle,
  Title,
} from "./styles";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

function getCourseWidth() {
  var cardWidth = width - 40;
  if (width >= 768) {
    cardWidth = (width - 60) / 2;
  }
  if (width >= 900) {
    cardWidth = (width - 80) / 3;
  }
  return cardWidth;
}

export default function Course(props) {
  const [cardWith, setCardWidth] = useState(getCourseWidth(width));

  function adaptlayout(dimension) {
    setCardWidth(getCourseWidth(dimension.window.width));
  }

  useEffect(() => {
    Dimensions.addEventListener("change", adaptlayout);

    return Dimensions.removeEventListener("change", adaptlayout);
  }, [adaptlayout]);

  return (
    <Container style={{ width: cardWith }}>
      <Cover>
        <Image source={props.image} />
        <Logo source={props.logo} resizeMode="contain" />
        <Subtitle>{props.subtitle}</Subtitle>
        <Title>{props.title}</Title>
      </Cover>
      <Content>
        <Avatar source={props.avatar} />
        <Caption>{props.caption}</Caption>
        <Author>Taught by {props.author}</Author>
      </Content>
    </Container>
  );
}
