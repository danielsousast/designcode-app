import React from "react";
import { Dimensions, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import CourseSection from "../../components/CourseSection";
import CoursesList from "../../components/CoursesList";

import {
  Container,
  Background,
  Hero,
  Logo,
  Caption,
  Title,
  Subtitle,
  Sections,
  SectionScrollView,
  Author,
  Name,
  Avatar,
} from "./styles";

let { width } = Dimensions.get("window");

export default function Courses() {
  return (
    <Container>
      <ScrollView>
        <Hero>
          <Background source={require("../../../assets/background12.jpg")} />
          <LinearGradient
            colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.5)"]}
            style={{ position: "absolute", width: width, height: 460 }}
          />
          <Logo source={require("../../../assets/logo-react.png")} />
          <Caption>12 Sections</Caption>
          <Title>React Native for Designers</Title>
          <Sections>
            <SectionScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {sections.map((section, index) => (
                <CourseSection
                  key={index}
                  title={section.title}
                  image={section.image}
                  progress={section.progress}
                />
              ))}
            </SectionScrollView>
          </Sections>
          <Author>
            <Avatar source={require("../../../assets/avatar.jpg")} />
            <Name>Taught by Meng To</Name>
          </Author>
        </Hero>
        <Subtitle>Latest Courses</Subtitle>
        <CoursesList />
      </ScrollView>
    </Container>
  );
}

const sections = [
  {
    title: "React Native for Designers",
    progress: 0.2,
    image: require("../../../assets/background1.jpg"),
  },
  {
    title: "Styled Components",
    progress: 0.3,
    image: require("../../../assets/background2.jpg"),
  },
  {
    title: "Assets, Icons and SVG",
    progress: 0.9,
    image: require("../../../assets/background3.jpg"),
  },
  {
    title: "Props and Data",
    progress: 0.5,
    image: require("../../../assets/background4.jpg"),
  },
  {
    title: "States and Layout Animation",
    progress: 0.1,
    image: require("../../../assets/background6.jpg"),
  },
];
