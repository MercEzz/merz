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
      bg={useColorModeValue("rgba(255,225,253, 0.4)", "rgba(7,7,8, 0.4)")}
      display="flex"
      alignItems="center"
      justifyContent="center"
      css={{
        writingMode: "vertical-lr",
        backdropFilter: "blur(10px)",
      }}
      fontSize="xl"
      zIndex="10"
    >
      <NextLink href="/contact">CONTACT</NextLink>
    </Box>
  );
};

export default RightSideBar;
