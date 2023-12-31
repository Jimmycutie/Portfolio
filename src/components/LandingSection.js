import React from "react";
import { Avatar, HStack, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faHtml5,
  faCss3,
  faNodeJs,
  faPython,
} from "@fortawesome/free-brands-svg-icons";

const greeting = "Hello, I am Mihir!";
const bio1 = "A Software Developer";
const bio2 = "Tech Stack:";

const skills = [faReact, faNodeJs, faHtml5, faCss3, faPython]
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
        spacing={2}
      >
        <Heading as='h2' size='lg' noOfLines={1}>
          {greeting}
        </Heading>
        <VStack spacing={10}>
          <Heading as='h2' size='2xl' noOfLines={1}>
            {bio1}
          </Heading>
          <HStack spacing={6}>
            <Heading as='h2' size='lg' noOfLines={1}>
              {bio2}
            </Heading>
            {skills.map(skill => (<FontAwesomeIcon icon={skill} size='2x'/>))}
          </HStack>
        </VStack>
      </VStack>
      <Avatar size='3xl' name='Mihir' src={require("../images/profile.jpg")} />
    </HStack>
  </FullScreenSection>
);

export default LandingSection;
