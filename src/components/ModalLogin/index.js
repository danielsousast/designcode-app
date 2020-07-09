import React, { useState, useMemo, useRef } from "react";
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
import Success from "../Success";
import Loading from "../Loading";

export default function ModalLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [loading, setLoading] = useState(false);

  const defaultIconEmail = require("../../../assets/icon-email.png");
  const defaultIconPassword = require("../../../assets/icon-password.png");

  const [iconEmail, setIconEmail] = useState(defaultIconEmail);
  const [iconPassword, setIconPassword] = useState(defaultIconPassword);

  function handleLogin() {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccessful(true);
    }, 2000);
  }

  function focusEmail() {
    setIconEmail(require("../../../assets/icon-email-animated.gif"));
    setIconPassword(defaultIconPassword);
  }

  function focusPassword() {
    setIconPassword(require("../../../assets/icon-password-animated.gif"));
    setIconEmail(defaultIconPassword);
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
      <Success isActive={successful} />
      <Loading isActive={loading} />
    </Container>
  );
}
