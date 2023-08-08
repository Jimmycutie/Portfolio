import { color, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter, Stack, Button } from '@chakra-ui/react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Cards = ({ title, description, image }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  console.log("card rendered")
  return (
    <Card 
      maxW='sm' 
      key={title} 
      className="card" 
      backgroundImage= {image}
      color={"whiteAlpha.800"}
    >
        <CardBody>
        </CardBody>
        <CardFooter className="card-content">
          <Stack 
            mt='6' 
            spacing='3' 
            align={"flex-start"}
          >
            <Heading className="card--title" size='md' >{title}</Heading>
            <div className="card--extra">
              <Text>
                {description}
              </Text>
              <Button className="card--button" variant='ghost' colorScheme='black'>
                See more &rarr;
              </Button>
            </div>
          </Stack>
        </CardFooter>
    </Card>
  );
};

export default Cards;
