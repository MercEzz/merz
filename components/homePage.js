import { Container, Box, useColorModeValue } from "@chakra-ui/react";

import MainTitle from "./MainTitle";

const HomePage = () => {
  return (
    <>
      <Box
        w="100%"
        h="100%"
        bgImage={useColorModeValue(
          "/images/lightwall.jpg",
          "/images/darkwall.jpg"
        )}
        bgPos="center"
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <Container
          display={"flex"}
          flexDir="row"
          maxW="container.md"
          p={2}
          justifyContent="center"
          mt="5rem"
          pt={{ base: "9rem", md: "12rem" }}
        >
          <Box textAlign={"center"} p={2}>
            <MainTitle />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default HomePage;
