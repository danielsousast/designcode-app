import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: #f0f3f5;
  justify-content: center;
  align-items: center;
`;

export const Mask = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  z-index: -3;
`;
