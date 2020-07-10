import React, { useEffect, useState } from "react";
import {
  StatusBar,
  Animated,
  Easing,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

import Card from "../../components/Card";
import Course from "../../components/Course";
import Menu from "../../components/Menu";
import Notifications from "../../components/Notifications";
import Logo from "../../components/Logo";
import Avatar from "../../components/Avatar";
import logos from "../../data/logos";
import courses from "../../data/courses";
import {
  TitleBar,
  Title,
  Name,
  Subtitle,
  ScrollContainer,
  SaveAreaContainer,
  ScrollLogo,
  ScrollCards,
  ButtonAvatar,
  RootView,
  ButtonCard,
  CardsContainer,
  CoursesContainer,
} from "./styles";
import { store } from "../../store";
import ModalLogin from "../../components/ModalLogin";
import NotificationButton from "../../components/NotificationButton";

const CardsQuery = gql`
  {
    cardsCollection {
      items {
        title
        subtitle
        image {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        subtitle
        caption
        logo {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        content
      }
    }
  }
`;

export default function Home() {
  const [scale, setScale] = useState(new Animated.Value(1));
  const [opacity, setOpacity] = useState(new Animated.Value(1));

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const action = useSelector((state) => state.app.action);
  const name = store.getState().app.name;

  const { loading, error, data } = useQuery(CardsQuery);

  function handleOpenMenu() {
    store.dispatch({
      type: "OPEN_MENU",
    });
  }

  function handleOpenLogin() {
    store.dispatch({
      type: "OPEN_LOGIN",
    });
  }

  useEffect(() => {
    if (Platform.OS === "android") StatusBar.setHidden(false);
  }, []);

  useEffect(() => {
    if (action == "openMenu") {
      Animated.timing(scale, {
        toValue: 0.9,
        duration: 300,
        easing: Easing.in(),
        useNativeDriver: false,
      }).start();

      Animated.spring(opacity, {
        toValue: 0.5,
        useNativeDriver: false,
      }).start();

      StatusBar.setBarStyle("light-content", true);
    }

    if (action == "closeMenu") {
      Animated.timing(scale, {
        toValue: 1,
        duration: 300,
        easing: Easing.in(),
        useNativeDriver: false,
      }).start();
      Animated.spring(opacity, {
        toValue: 1,
        useNativeDriver: false,
      }).start();

      StatusBar.setBarStyle("dark-content", true);
    }
  }, [action]);

  function handleAvatar() {
    if (store.getState().app.name) {
      store.dispatch({ type: "OPEN_MENU" });
    } else {
      store.dispatch({ type: "OPEN_LOGIN" });
    }
  }

  function openNotif() {
    store.dispatch({ type: "OPEN_NOTIF" });
  }

  return (
    <RootView>
      <Menu />
      <Notifications />
      <Animated.View
        style={[
          styles.animatedContainer,
          {
            transform: [{ scale: scale }],
            opacity: opacity,
          },
        ]}
      >
        <SaveAreaContainer>
          <ScrollContainer showsVerticalScrollIndicator={false}>
            <TitleBar>
              <ButtonAvatar onPress={handleAvatar}>
                <Avatar />
              </ButtonAvatar>
              <Title>Welcome back,</Title>
              <Name>{name}</Name>
              <TouchableOpacity
                onPress={openNotif}
                style={{ position: "absolute", right: 20, top: 0 }}
              >
                <NotificationButton />
              </TouchableOpacity>
            </TitleBar>
            <ScrollLogo horizontal showsHorizontalScrollIndicator={false}>
              {logos.map((item, index) => (
                <Logo key={index} image={item.image} text={item.text} />
              ))}
            </ScrollLogo>
            <Subtitle>Continue Learning</Subtitle>
            <ScrollCards horizontal showsHorizontalScrollIndicator={false}>
              <CardsContainer>
                {data &&
                  data.cardsCollection.items.map((item, index) => (
                    <ButtonCard
                      key={index}
                      activeOpacity={0.6}
                      onPress={() =>
                        navigation.navigate("Section", {
                          section: item,
                        })
                      }
                    >
                      <Card
                        title={item.title}
                        caption={item.caption}
                        subtitle={item.subtitle}
                        image={item.image}
                        logo={item.logo}
                        author={item.author}
                      />
                    </ButtonCard>
                  ))}
              </CardsContainer>
            </ScrollCards>
            <Subtitle>Popular Courses</Subtitle>
            <CoursesContainer>
              {courses.map((item, index) => (
                <Course
                  key={index}
                  title={item.title}
                  subtitle={item.subtitle}
                  image={item.image}
                  logo={item.logo}
                  caption={item.caption}
                  avatar={item.avatar}
                  author={item.author}
                />
              ))}
            </CoursesContainer>
          </ScrollContainer>
        </SaveAreaContainer>
      </Animated.View>
      <StatusBar />
      <ModalLogin />
    </RootView>
  );
}

const styles = StyleSheet.create({
  animatedContainer: {
    flex: 1,
    backgroundColor: "#f0f3f5",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
});
