import "./App.css";
import Terminal from "./components/Terminal";
import styled, { css } from "styled-components";
import {
  Box,
  Center,
  Flex,
  Heading,
  Spacer,
  Image,
  HStack,
} from "@chakra-ui/react";
import ProjectImage from "./components/ProjectImage";
import Cindys from "./Cindys.png";
import Ballot from "./ballotProgram.png";
import background from "./components/blue_background.jpg";

const Wrapper = styled.div`
  height: 100%;
  background: url(${background}) no-repeat center center fixed;
  image-rendering: -webkit-optimize-contrast;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
`;
const Container = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column;
`;

function App() {
  return (
    <Wrapper>
      <Container>
        <Terminal />
        <a
          href="https://www.vecteezy.com/free-vector/ornament"
          style={{
            textDecoration: "none",
            color: "white",
            textAlign: "center",
          }}
        >
          Ornament Vectors by Vecteezy
        </a>
      </Container>
    </Wrapper>
  );
}

export default App;
