import { Box, Container, useColorModeValue } from "@chakra-ui/react";

import NextLink from "next/link";

const RightSideBar = () => {
  return (
    <Box
      as="nav"
      pos="fixed"
      h="100%"
      right="0"
      p={2}
      // bg={useColorModeValue("#fffbcf", "rgb(7,7,8, 0.8)")}
      bg="rgb(7,7,8, 0.8)"
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      css={{
        writingMode: "vertical-lr",
      }}
      fontSize="xl"
      zIndex="10"
    >
      <NextLink href="/contact">CONTACT</NextLink>
    </Box>
  );
};

export default RightSideBar;
