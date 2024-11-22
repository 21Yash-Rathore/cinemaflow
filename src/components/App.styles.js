import styled from "@emotion/styled";

export const Root = styled.div`
  display: flex;
  border: 2px solid red;
  height: 100%;
`;

export const Toolbar = styled.div`
  height: 70px;
  border: 2px solid black;
`;

export const Main = styled.main`
  flex-grow: 1;
  padding: 2em;
  border: 2px solid green;
`;
