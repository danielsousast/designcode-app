import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const ScrollContainer = styled.ScrollView`
  flex: 1;
  background: #fff;
`;

export const Cover = styled.View`
  height: 375px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: 50px;
  left: 20px;
`;

export const Logo = styled.Image`
  width: 24px;
  height: 24px;
`;

export const Subtitle = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  margin-left: 5px;
  text-transform: uppercase;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #fff;
  font-weight: 700;
  width: 170px;
  position: absolute;
  top: 88px;
  left: 20px;
`;

export const Caption = styled.Text`
  color: #fff;
  font-size: 17px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 300px;
`;

export const CloseView = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const Content = styled.View`
  height: 1100px;
  padding: 20px;
`;
