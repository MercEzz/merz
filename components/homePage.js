import { Container, Box, useColorModeValue, Flex } from "@chakra-ui/react";

import MainTitle from "./MainTitle";

const HomePage = () => {
  return (
    <>
      <Flex
        w="100%"
        h="100vh"
        // bgImage={useColorModeValue("/images/lightwall.jpg", "/images/wall.jpg")}
        // bgPos="center"
        // bgRepeat="no-repeat"
        // bgSize="cover"
        align="center"
        justify="center"
      >
        <MainTitle />
      </Flex>
    </>
  );
};

export default HomePage;
