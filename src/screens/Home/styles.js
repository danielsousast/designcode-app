import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;

export const CardsContainer = styled.View`
  flex-direction: row;
  padding-left: 5px;
`;

export const CoursesContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 10px;
`;

export const RootView = styled.View`
  background: black;
  flex: 1;
`;

export const TitleBar = styled.View`
  width: 100%;
  margin-top: 40px;
  padding-left: 80px;
`;

export const ButtonAvatar = styled.TouchableOpacity`
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

export const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: 700;
`;

export const Subtitle = styled.Text`
  color: #b8b3ce;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`;

export const SaveAreaContainer = styled.SafeAreaView``;

export const ScrollContainer = styled.ScrollView`
  padding-bottom: 30px;
`;

export const ScrollLogo = styled.ScrollView`
  flex-direction: row;
  padding: 20px;
  padding-left: 12px;
  padding-top: 30px;
`;

export const ScrollCards = styled.ScrollView`
  padding-bottom: 30px;
`;

export const ButtonCard = styled.TouchableOpacity``;

export const Message = styled.Text``;
