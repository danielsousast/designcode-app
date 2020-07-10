import styled from "styled-components/native";
import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

export const Container = styled.View`
  position: absolute;
  background: white;
  width: 100%;
  height: 100%;
  z-index: 100;
  border-radius: 10px;
  overflow: hidden;
`;

export const Cover = styled.View`
  height: 142px;
  background: black;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  position: absolute;
  height: 100%;
  width: 100%;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: 600;
`;

export const Subtitle = styled.Text`
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
  margin-top: 8px;
`;

export const Content = styled.View`
  height: ${height}px;
  background: #f0f3f5;
  padding: 50px;
`;

export const CloseView = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: #fff;
  justify-content: center;
  align-items: center;
  align-self: center;

  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

export const Touchable = styled.TouchableOpacity`
  position: absolute;
  top: 120px;
  left: 50%;
  margin-left: -22px;
  z-index: 1;
`;

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    zIndex: 100,
    borderRadius: 10,
    overflow: "hidden",
  },
});

export const ButtonMenu = styled.TouchableOpacity``;
