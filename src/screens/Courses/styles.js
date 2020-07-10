import styled from "styled-components/native";
import { Dimensions } from "react-native";

let { width } = Dimensions.get("window");

export const Container = styled.View`
  background: #f0f3f5;
`;

export const ScrollView = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

export const Hero = styled.View`
  height: 460px;
  background: #3c4560;
`;

export const Background = styled.Image`
  position: absolute;
  top: 0;
  left: 0;
  width: ${width}px;
  height: 460px;
`;

export const Logo = styled.Image`
  width: 48px;
  height: 48px;
  margin-top: 50px;
  margin-left: 20px;
  align-self: center;
`;

export const Caption = styled.Text`
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  color: #b8bece;
  margin-top: 20px;
  margin-left: 20px;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: white;
  font-weight: 600;
  margin-top: 4px;
  margin-left: 20px;
  width: 220px;
`;

export const Sections = styled.View`
  margin-top: 20px;
  flex-direction: row;
`;

export const SectionScrollView = styled.ScrollView`
  padding: 10px 0;
`;

export const Author = styled.View`
  flex-direction: row;
  margin-top: 10px;
  align-items: center;
  margin-left: 20px;
`;

export const Avatar = styled.Image`
  width: 22px;
  height: 22px;
  border-radius: 11px;
  background: white;
`;

export const Name = styled.Text`
  margin-left: 8px;
  color: #b8bece;
`;

export const Subtitle = styled.Text`
  font-size: 15px;
  text-transform: uppercase;
  font-weight: 600;
  color: #b8bece;
  margin: 20px 0 0 20px;
`;
