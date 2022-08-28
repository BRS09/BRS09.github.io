import {
  Box,
  Center,
  Container,
  Image,
  ScaleFade,
  Spacer,
  Square,
} from "@chakra-ui/react";
import React from "react";

const ProjectImage = (props) => {
  const example = () => {
    let x = 10;

    x == 10 ? console.log("hello world") : console.log("error");
  };
  return (
    <Box boxSize="30%">
      <Image
        src={props.image}
        loading="lazy"
        borderRadius="10px"
        boxShadow="lg"
        opacity="0.6"
        filter="grayscale(80%)"
      ></Image>
    </Box>
  );
};

export default ProjectImage;
