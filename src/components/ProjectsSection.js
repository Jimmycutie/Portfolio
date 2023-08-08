import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Cards from "./Cards";

const projects = [
  {
    title: "React Space",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    image: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/384-felix-mg-4715.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=f1d46f5bc997f6de7926e7557c0c4f09",
  },
  {
    title: "React Infinite Scroll",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    image: "https://images.pexels.com/photos/4069292/pexels-photo-4069292.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    title: "Photo Gallery",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    image: "https://images.pexels.com/photos/15023049/pexels-photo-15023049.jpeg?cs=srgb&dl=pexels-emmanuel-edel-15023049.jpg&fm=jpg",
  },
  {
    title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    image: "https://images.pexels.com/photos/10942519/pexels-photo-10942519.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      background="transparent"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Cards
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
