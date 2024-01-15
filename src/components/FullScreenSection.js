import * as React from "react";
import { VStack } from "@chakra-ui/react";
import './hovertree'

/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      // backgroundImage = "https://www.freepsd360.com/wp-content/uploads/2022/12/Blur-Background-Full-HD-4k-Free-Download-37.jpg"
      // backgroundRepeat= "no-repeat"
      // backgroundAttachment= "fixed"
      // backgroundSize="cover"
      // backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
    >
      <canvas id='canvas'></canvas>
      <VStack maxWidth="1280px" minHeight="100vh" {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
