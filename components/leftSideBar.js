import { Box, Container, useColorModeValue } from "@chakra-ui/react";

import NextLink from "next/link";

const LeftSideBar = () => {
  return (
    <Box
      as="nav"
      pos="fixed"
      h="100%"
      p={2}
      bg={useColorModeValue("rgba(255,225,253,0.4)", "rgba(7,7,8, 0.4)")}
      display="flex"
      alignItems="center"
      justifyContent="center"
      css={{
        writingMode: "vertical-lr",
        transform: "rotate(180deg)",
        backdropFilter: "blur(10px)",
      }}
      fontSize="lg"
      zIndex="10"
    >
      <NextLink href="/projects">PROJECTS</NextLink>
    </Box>
  );
};

export default LeftSideBar;
