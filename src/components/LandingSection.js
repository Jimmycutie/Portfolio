import React from "react";
import { Avatar, HStack, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Mihir!";
const bio1 = "A Software Developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    background="transparent"
    id="home-section"
  >
    <HStack spacing={6}>
      <VStack
        spacing={8}
      >
        <Heading as='h3' size='lg' noOfLines={1}>
          {greeting}
        </Heading>
        <VStack spacing={6}>
          <Heading as='h2' size='2xl' noOfLines={1}>
            {bio1}
          </Heading>
          <Heading as='h2' size='2xl' noOfLines={1}>
            {bio2}
          </Heading>
        </VStack>
      </VStack>
      <Avatar size='3xl' name='Mihir' src={require("../images/profile.jpg")} />
    </HStack>
  </FullScreenSection>
);

export default LandingSection;
