import { Box, Container, useColorModeValue } from "@chakra-ui/react";

import NextLink from "next/link";

const LeftSideBar = () => {
  return (
    <Box
      as="nav"
      pos="fixed"
      h="100%"
      p={2}
      // bg={useColorModeValue("#fffbcf", "rgb(7,7,8, 0.8)")}
      bg="rgb(7,7,8, 0.8)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="white"
      css={{
        writingMode: "vertical-lr",
        transform: "rotate(180deg)",
      }}
      fontSize="lg"
      // zIndex="10"
    >
      <NextLink href="/projects">PROJECTS</NextLink>
    </Box>
  );
};

export default LeftSideBar;
