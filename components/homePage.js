import { Container, Box, useColorModeValue } from "@chakra-ui/react";

import MainTitle from "./MainTitle";

const HomePage = () => {
  return (
    <>
      <Box>
        <Container
          display={"flex"}
          flexDir="row"
          maxW="container.md"
          p={2}
          justifyContent="center"
          mt="2rem"
          pt={{ base: "9rem", md: "12rem" }}
          color="white"
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
