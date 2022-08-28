import react from "react";
import styled, { css } from "styled-components";
import TerminalHeader from "./TerminalHeader";
import TerminalBody from "./TerminalBody";

const Wrapper = styled.div`
  font-family: Monospace;
  height: 100%;
  padding: 5%;
  display: flex;
  align-items: center;
`;
const Container = styled.div`
  font-size: 160%;
  background-color: #242424;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 80%;
  margin: auto;
`;

const Terminal = () => {
  return (
    <Wrapper>
      <Container>
        <TerminalHeader />
        <TerminalBody />
      </Container>
    </Wrapper>
  );
};

export default Terminal;
