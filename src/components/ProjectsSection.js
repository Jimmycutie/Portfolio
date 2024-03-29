import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Cards from "./Cards";

const projects = [
  {
    title: "Influenzilla",
    description:
      "One stop destination that provides services from designing eye-catching logos and brand identities, to crafting effective influencer marketing campaigns",
    image: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/384-felix-mg-4715.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=f1d46f5bc997f6de7926e7557c0c4f09",
    url: "https://influenzilla-iota.vercel.app/"
  },
  {
    title: "Finanace Dashboard",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    image: "https://images.pexels.com/photos/4069292/pexels-photo-4069292.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    url: "https://admin-dashboard-eta-jet.vercel.app/"
  },
  {
    title: "Bird Species Classifier",
    description:
      "An application that can classify different objects as birds and classify it among 200 differnet species of birds.",
    image: "https://images.pexels.com/photos/15023049/pexels-photo-15023049.jpeg?cs=srgb&dl=pexels-emmanuel-edel-15023049.jpg&fm=jpg",
    url: ""
  },
  {
    title: "Coffee Shop Website",
    description:
      "A One-stop shop for a restaurant to display the menu items and manage, track orders and user profiles.",
    image: "https://images.pexels.com/photos/10942519/pexels-photo-10942519.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    url: ""
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
        gridTemplateColumns={{sm: "repeat(1,minmax(0,1fr))" ,lg: "repeat(2,minmax(0,1fr))"}}
        gridGap={8}
      >
        {projects.map((project) => (
          <Cards
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            url={project.url}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
