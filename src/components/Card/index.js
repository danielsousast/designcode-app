import React from "react";
import {
  Container,
  Cover,
  Image,
  Title,
  Content,
  Wrapper,
  Logo,
  Caption,
  Subtitle,
} from "./styles";

export default function Card(props) {
  return (
    <Container style={{ elevation: 10 }}>
      <Cover>
        <Image source={props.image} />
        <Title>{props.title}</Title>
      </Cover>
      <Content>
        <Logo source={props.logo} />
        <Wrapper>
          <Caption>{props.caption}</Caption>
          <Subtitle>{props.subtitle}</Subtitle>
        </Wrapper>
      </Content>
    </Container>
  );
}
