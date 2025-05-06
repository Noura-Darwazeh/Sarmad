import styled from "styled-components";
export const GlassDiv = styled.div`
  display: flex;
  border-radius: 20px;
  align-items: flex-end;
  flex-direction: column;
  width: ${(props) => props.width};
  padding-top: ${(props) => props.topPadding};
  box-shadow: 4px 4px 4px rgba(255, 255, 255, 0.5);
  height: ${(props) => props.height};
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.2) 100%
  );
  button {
    height: 64px;
    width: 20.6vw;
    border-radius: 10px;
    margin-inline: auto;
  }
`;
