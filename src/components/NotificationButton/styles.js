import styled from "styled-components/native";

export const Container = styled.View`
  width: 44px;
  height: 44px;
  justify-content: center;
  align-items: center;
`;

export const Bubble = styled.View`
  width: 16px;
  height: 16px;
  background: #3c4560;
  position: absolute;
  top: 0px;
  right: 5px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
`;

export const Text = styled.Text`
  color: white;
  font-size: 12px;
  font-weight: 700;
`;
