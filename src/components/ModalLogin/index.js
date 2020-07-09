import React, { useState } from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { BlurView } from "expo-blur";

import {
  Container,
  Modal,
  Logo,
  Text,
  TextInput,
  Button,
  ButtonText,
  IconEmail,
  IconPassword,
} from "./styles";

export default function ModalLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [iconEmail, setIconEmail] = useState(
    require("../../../assets/icon-email.png")
  );
  const [iconPassword, setIconPassword] = useState(
    require("../../../assets/icon-password.png")
  );

  function handleLogin() {}

  function focusEmail() {
    setIconPassword(require("../../../assets/icon-password.png"));
    setIconEmail(require("../../../assets/icon-email-animated.gif"));
  }

  function focusPassword() {
    setIconEmail(require("../../../assets/icon-email.png"));
    setIconPassword(require("../../../assets/icon-password-animated.gif"));
  }

  function tapBackground() {
    Keyboard.dismiss();
  }

  return (
    <Container>
      <TouchableWithoutFeedback onPress={tapBackground}>
        <BlurView
          tint="default"
          intensity={100}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        />
      </TouchableWithoutFeedback>

      <Modal>
        <Logo source={require("../../../assets/logo-dc.png")} />
        <Text>Start Learning. Access Pro Content</Text>

        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
          onFocus={focusEmail}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          onFocus={focusPassword}
        />

        <IconEmail source={iconEmail} />
        <IconPassword source={iconPassword} />

        <Button activeOpacity="0.4" onPress={handleLogin}>
          <ButtonText>Log IN</ButtonText>
        </Button>
      </Modal>
    </Container>
  );
}
