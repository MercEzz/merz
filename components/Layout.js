import { Flex, useColorModeValue } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <>
      <Flex
        as="main"
        direction="column"
        h="100vh"
        py="4"
        px="4"
        w="100%"
        bgColor={useColorModeValue("#d8d8ff", "#0e0f10")}
        pos="fixed"
        alignItems="center"
        alignContent="center"
        color={useColorModeValue("gray.700", "gray.200")}
      >
        {children}
      </Flex>
    </>
  );
};

export default Layout;
