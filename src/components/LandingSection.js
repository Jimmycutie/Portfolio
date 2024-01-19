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
    <HStack spacing={{sm: "2", md: "6"}}>
      <VStack
        spacing={2}
      >
        <Heading as='h2' size={{sm: "sm", sm:"", md: "md", xl: 'lg'}} noOfLines={1} fontFamily={'Martian Mono'} fontWeight={500}>
          {greeting}
        </Heading>
        <VStack spacing={10}>
          <Heading as='h2' size={{sm: "md", md: "xl", xl: '2xl'}} noOfLines={1} fontFamily={'Martian Mono'} fontWeight={700}>
            {bio1}
          </Heading>
          <HStack spacing={6}>
            <Heading as='h2' size={{sm: "sm", md: "md", xl: 'lg'}} noOfLines={1} fontFamily={'Martian Mono'} fontWeight={600}>
              {bio2}
            </Heading>
            {skills.map(skill => (<FontAwesomeIcon icon={skill} size='2x'/>))}
          </HStack>
        </VStack>
      </VStack>
      <Avatar size={{base:'md', sm: "lg", md: "2xl", xl: '3xl'}} name='Mihir' src={require("../images/profile.jpg")} />
    </HStack>
  </FullScreenSection>
);

export default LandingSection;
