import { Heading, Text } from "@chakra-ui/react";
import { Card, CardBody, CardFooter, Stack, Button } from '@chakra-ui/react'
import React from "react";
import { Link } from "@chakra-ui/react";


const Cards = ({ title, description, image, url }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Card 
      maxW='sm' 
      key={title} 
      className="card" 
      backgroundImage= {image}
      color={"whiteAlpha.800"}
      zIndex={0}
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
              <Link className="card--button" href={url} isExternal>
                See more &rarr;
              </Link>
            </div>
          </Stack>
        </CardFooter>
    </Card>
  );
};

export default Cards;
