import React from "react";
import { Container, Bubble, Text } from "./styles";
import { NotificationIcon } from "../Icons";

export default function NotificationButton() {
  return (
    <Container>
      <NotificationIcon color="#4775f2" />
      <Bubble>
        <Text>3</Text>
      </Bubble>
    </Container>
  );
}
