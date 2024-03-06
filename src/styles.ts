import styled from "styled-components";

export const PinningSectionScroll = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  border: 1px solid red;
`;

export const Container = styled.div`
  position: relative;
  height: 100%;
  will-change: transform;
  background-color: yellow;
`;
