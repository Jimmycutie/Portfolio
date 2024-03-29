import React from "react";
import { Avatar, Flex, HStack, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3,
  faNodeJs,
  faPython,
} from "@fortawesome/free-brands-svg-icons";


const greeting = "Hello, I am Mihir!";
const bio1 = "Software Developer";
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
    <HStack spacing={{sm: "2", md: "6"}} display={{base: "none", sm: "flex", xl:"flex"}}>
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

    {/* {mobile interface} */}
    <VStack 
      spacing={{base:20 ,sm: "2", md: "6"}} 
      display={{base: "flex", sm: "none", xl:"none"}}
      justifyItems={"flex-start"}
      alignItems={"flex-start"}
      p={8}
    >
      <HStack spacing={2} className="intro-card" maxW={"100%"}>
        <VStack>
          <Heading as='h2' fontSize={"lg"} size={{sm: "sm", sm:"", md: "md", xl: 'lg'}} noOfLines={2} fontFamily={'Martian Mono'} fontWeight={500}>
            {greeting}
          </Heading>
          <Heading as='h2' fontSize={"md"} size={{sm: "md", md: "xl", xl: '2xl'}} noOfLines={2} fontFamily={'Martian Mono'} fontWeight={700}>
            {bio1}
          </Heading>
        </VStack>
        <Avatar alignSelf={"center"} size={{base:'xl', sm: "lg", md: "2xl", xl: '3xl'}} name='Mihir' src={require("../images/profile.jpg")} />
      </HStack>
      
      
      <VStack spacing={6} alignItems={"flex-start"} width={"100%"}>
        <Heading as='h2' size={{sm: "sm", md: "md", xl: 'lg'}} noOfLines={1} fontFamily={'Martian Mono'} fontWeight={600}>
          {bio2}
        </Heading>
        <HStack width={"100%"} justifyContent={"space-between"}>
          {skills.map(skill => (<FontAwesomeIcon icon={skill} size='2x'/>))}
        </HStack>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
