import { Flex, useColorModeValue } from "@chakra-ui/react";
import { Head } from "next/Head";

const Layout = ({ children, title }) => {
  return (
    <>
      <Flex
        as="main"
        direction="column"
        h="100vh"
        py="6"
        px="6"
        w="100%"
        // bgColor={useColorModeValue("#0e0f10", "#f1ffd6")}
        pos="fixed"
        alignItems="center"
        alignContent="center"
        bgImage="/images/bggif.gif"
        bgRepeat="no-repeat"
        bgSize="cover"
        zIndex="1"
      >
        {children}
      </Flex>
    </>
  );
};

export default Layout;
