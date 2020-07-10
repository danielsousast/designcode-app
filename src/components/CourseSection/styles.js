import styled from "styled-components/native";

export const Container = styled.View`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

export const Mask = styled.View`
  height: 100%;
  border-radius: 10px;
  background: #3c4560;
  overflow: hidden;
  justify-content: flex-end;
  margin-left: 20px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const Text = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: white;
  margin: 16px;
`;

export const Border = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
`;
