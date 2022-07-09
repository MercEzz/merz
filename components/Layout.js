import { Flex, useColorModeValue } from "@chakra-ui/react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Flex
        as="main"
        direction="column"
        h="100vh"
        w="100%"
        bgImage={useColorModeValue("/images/lightwall.jpg", "/images/wall.jpg")}
        bgPos="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        alignItems="center"
        alignContent="center"
        color={useColorModeValue("black", "white")}
      >
        <Header />
        {children}
      </Flex>
    </>
  );
};

export default Layout;
