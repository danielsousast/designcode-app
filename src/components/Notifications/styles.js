import styled from "styled-components/native";
import { Dimensions } from "react-native";

let { width } = Dimensions.get("window");
var cardWith = width - 40;
if (width > 500) {
  cardWith = 460;
}

export const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: #f0f3f5;
`;

export const CloseButton = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: white;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export const Wrapper = styled.View`
  align-self: center;
  width: ${cardWith}px;
  padding-top: 50px;
`;

export const Subtitle = styled.Text`
  font-size: 15px;
  text-transform: uppercase;
  font-weight: 600;
  color: #b8bece;
`;

export const Item = styled.View`
  width: 100%;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  margin-top: 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 24px;
  height: 24px;
`;

export const DateContainer = styled.View`
  background: #4775f2;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  padding: 0 8px;
  height: 20px;
  position: absolute;
  top: 0px;
  right: 0px;
`;

export const Date = styled.Text`
  color: white;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
  margin-left: 8px;
`;

export const Text = styled.Text`
  font-size: 17px;
  color: #3c4560;
  margin-top: 20px;
  line-height: 24px;
`;
