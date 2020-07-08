import React, { useEffect, useState } from "react";
import {
  StatusBar,
  Animated,
  Easing,
  StyleSheet,
  Platform,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

import Card from "../../components/Card";
import Course from "../../components/Course";
import Menu from "../../components/Menu";
import Logo from "../../components/Logo";
import Avatar from "../../components/Avatar";
import { NotificationIcon } from "../../components/Icons";
import logos from "../../data/logos";
import courses from "../../data/courses";
import { openMenu } from "../../store/actions/AppActions";
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

  const { loading, error, data } = useQuery(CardsQuery);

  function handleOpenMenu() {
    dispatch(openMenu());
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
    console.log("start");
  }, [action]);

  return (
    <RootView>
      <Menu />
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
              <ButtonAvatar onPress={handleOpenMenu}>
                <Avatar />
              </ButtonAvatar>
              <Title>Welcome back,</Title>
              <Name>Daniel Sousa</Name>
              <NotificationIcon
                color="#4775f2"
                style={{ position: "absolute", top: 5, right: 20 }}
              />
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
