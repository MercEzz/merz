import { Flex, useColorModeValue } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <>
      <Flex
        as="main"
        direction="column"
        h="100vh"
        py="6"
        px="6"
        w="100%"
        bgColor={useColorModeValue("#d8d8ff", "#0e0f10")}
        pos="fixed"
        alignItems="center"
        alignContent="center"
        color={useColorModeValue("#0e0f10", "#ffecff")}
        zIndex="-1"
      >
        {children}
      </Flex>
    </>
  );
};

export default Layout;
