import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Link,
  useColorModeValue,
  Spacer,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import NextLink from "next/link";
import BottomBar from "./bottomBar";
import LeftSideBar from "./leftSideBar";
import RightSideBar from "./rightSideBar";
import ToggleTheme from "./toggle-icon";
import { motion } from "framer-motion";

import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const MotionNav = motion(Box);

const Header = () => {
  const [disMenu, setDisMenu] = useState(true);
  const [displayMenu, setDisplayMenu] = useState("none");

  const toggleIcon = () => {
    setDisMenu(!disMenu);
    disMenu ? setDisplayMenu("flex") : setDisplayMenu("none");
  };

  return (
    <>
      <Box
        pos="fixed"
        as="nav"
        w="100%"
        // bg={useColorModeValue("rgba(213, 219, 229, 0.8)", "rgba(7,7,8, 0.8)")}
        bg="rgba(7,7,8, 0.8)"
        // css={{ backdropFilter: "blur(10px)" }}
        zIndex="11"
        // alignItems="center"
        color="white"
      >
        <Flex>
          <Box display={{ base: "flex", md: "none" }} w="100%" p="2">
            <Box m="2" px="2">
              <IconButton as={HiOutlineMenuAlt1} />
            </Box>
            <Spacer />
            <MotionNav
              p={2}
              fontSize="3xl"
              whileHover={{ transform: "translateY(-3px)" }}
            >
              <NextLink href="/">MerZ</NextLink>
            </MotionNav>
          </Box>
          {/* <Flex
          display={{ base: "flex", md: "none", lg: "none" }}
          p={2}
          mt={1}
          fontSize="lg"
          
        >
          {disMenu ? (
            <IconButton as={HiOutlineMenuAlt1} onClick={toggleIcon} />
          ) : (
            <IconButton as={AiOutlineClose} onClick={toggleIcon} />
          )} */}
          <MotionNav
            display={{ base: "none", md: "flex" }}
            p={2}
            fontSize="xl"
            whileHover={{ transform: "translateY(-3px)" }}
          >
            <NextLink href="/about">ABOUT</NextLink>
          </MotionNav>
          <Spacer display={{ base: "none", md: "flex" }} />
          <MotionNav
            display={{ base: "none", md: "flex" }}
            p={2}
            fontSize="3xl"
            whileHover={{ transform: "translateY(-3px)" }}
          >
            <NextLink href="/">MerZ</NextLink>
          </MotionNav>
          <Spacer />
          <Box display={{ base: "none", md: "flex" }} p={2} color="black">
            .......................{/* <ToggleTheme /> */}
          </Box>
          {/* </Flex> */}
        </Flex>
      </Box>
      <Box display={{ base: "none", md: "flex", lg: "flex" }}>
        <LeftSideBar />
        <RightSideBar />
      </Box>
      <BottomBar />
    </>
  );
};

const PhoneNav = () => {
  return <></>;
};

export default Header;
