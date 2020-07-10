import React, { useState, useEffect } from "react";
import {
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Animated,
  Dimensions,
} from "react-native";
import { BlurView } from "expo-blur";
import firebase from "../../firebase";

import Success from "../Success";
import Loading from "../Loading";
import { store } from "../../store";
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

const { height } = Dimensions.get("window");

export default function ModalLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [loading, setLoading] = useState(false);
  const [top, setTop] = useState(new Animated.Value(height));
  const [scale, setScale] = useState(new Animated.Value(1.3));
  const [translateY, setTranslateY] = useState(new Animated.Value(0));

  const defaultIconEmail = require("../../../assets/icon-email.png");
  const defaultIconPassword = require("../../../assets/icon-password.png");

  const [iconEmail, setIconEmail] = useState(defaultIconEmail);
  const [iconPassword, setIconPassword] = useState(defaultIconPassword);

  useEffect(() => {
    if (store.getState().app.action === "openLogin") {
      Animated.timing(top, {
        toValue: 0,
        duration: 0,
        useNativeDriver: false,
      }).start();

      Animated.spring(scale, {
        toValue: 1,
        duration: 0,
        useNativeDriver: false,
      }).start();

      Animated.timing(translateY, {
        toValue: 0,
        duration: 0,
        useNativeDriver: false,
      }).start();
    }

    if (store.getState().app.action === "closeLogin") {
      setTimeout(() => {
        Animated.timing(top, {
          toValue: height,
          duration: 0,
          useNativeDriver: false,
        }).start();

        Animated.spring(scale, {
          toValue: 1.3,
          duration: 0,
          useNativeDriver: false,
        }).start();
      }, 500);

      Animated.timing(translateY, {
        toValue: 1000,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
  }, [store.getState().app.action]);

  function handleLogin() {
    setLoading(true);

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (err) {
        Alert.alert("Error", err.message);
      })
      .then((response) => {
        setLoading(false);

        if (response) {
          setSuccessful(true);

          Alert.alert("Congrats", "You've logged successfully");

          store.dispatch({
            type: "SET_NAME",
            name: response.user.email,
          });

          setTimeout(() => {
            store.dispatch({ type: "CLOSE_LOGIN" });
            setSuccessful(false);
          }, 1000);
        }
      });
  }

  function focusEmail() {
    setIconEmail(require("../../../assets/icon-email-animated.gif"));
    setIconPassword(defaultIconPassword);
  }

  function focusPassword() {
    setIconPassword(require("../../../assets/icon-password-animated.gif"));
    setIconEmail(defaultIconEmail);
  }

  function tapBackground() {
    Keyboard.dismiss();

    store.dispatch({
      type: "CLOSE_LOGIN",
    });
  }

  return (
    <AnimatedContainer style={{ top: top }}>
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

      <AnimatedModal
        style={{ transform: [{ scale: scale }, { translateY: translateY }] }}
      >
        <Logo source={require("../../../assets/logo-dc.png")} />
        <Text>Start Learning. Access Pro Content</Text>

        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
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
      </AnimatedModal>
      <Success isActive={successful} />
      <Loading isActive={loading} />
    </AnimatedContainer>
  );
}

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const AnimatedModal = Animated.createAnimatedComponent(Modal);
