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
  VStack,
  Drawer,
  useDisclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import NextLink from "next/link";
import BottomBar from "./bottomBar";
import LeftSideBar from "./leftSideBar";
import RightSideBar from "./rightSideBar";
import ToggleTheme from "./toggle-icon";
import { motion } from "framer-motion";

import { GiHamburgerMenu } from "react-icons/gi";

import { HamburgerIcon } from "@chakra-ui/icons";

const MotionNav = motion(Box);

const Header = () => {
  const variants = {
    hidden: { opacity: 0, x: 0, y: -500 },
    enter: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <>
      <Box
        pos="fixed"
        as="nav"
        w="100%"
        bg={useColorModeValue("rgba(255,225,253)", "rgba(7,7,8, 0.4)")}
        css={{ backdropFilter: "blur(10px)" }}
        zIndex="11"
      >
        <Flex>
          <Box display={{ base: "flex", md: "none" }} w="100%" p="2">
            <Box m="3">
              <Menu isLazy id="navbar-menu">
                <MenuButton
                  as={IconButton}
                  size="lg"
                  variant="ghost"
                  aria-label="Options"
                >
                  <Icon as={GiHamburgerMenu} />
                </MenuButton>
                <MenuList
                  bg={useColorModeValue(
                    "rgba(122,167,226, 0.9)",
                    "rgba(7,7,8, 0.9)"
                  )}
                  w="100vw"
                >
                  <NextLink href="/about" passHref>
                    <MenuItem as={Link}>About</MenuItem>
                  </NextLink>
                  <NextLink href="/contact" passHref>
                    <MenuItem as={Link}>Contact</MenuItem>
                  </NextLink>
                  <Box px="3">
                    <ToggleTheme />
                  </Box>
                </MenuList>
              </Menu>
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
          <MotionNav
            display={{ base: "none", md: "flex" }}
            p={2}
            mt="2"
            fontSize="xl"
            whileHover={{ transform: "translateY(-3px)" }}
          >
            <NextLink href="/about">ABOUT</NextLink>
          </MotionNav>
          <Spacer />
          <MotionNav
            display={{ base: "none", md: "flex" }}
            p={2}
            fontSize="3xl"
            whileHover={{ transform: "translateY(-3px)" }}
          >
            <NextLink href="/">MerZ</NextLink>
          </MotionNav>
          <Spacer />

          <Box display={{ base: "none", md: "flex" }} p={2}>
            <ToggleTheme />
          </Box>
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

export default Header;
