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

import { GiHamburgerMenu } from "react-icons/gi";

import { HamburgerIcon } from "@chakra-ui/icons";

const Header = () => {
  return (
    <>
      <Box
        pos="fixed"
        as="nav"
        w="100%"
        bg={useColorModeValue("rgba(255,225,253, 0.4)", "rgba(7,7,8, 0.4)")}
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
                  <NextLink href="/projects" passHref>
                    <MenuItem as={Link}>Projects</MenuItem>
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
            <Box
              p={2}
              fontSize="3xl"
              whileHover={{ transform: "translateY(-3px)" }}
            >
              <NextLink href="/">MerZ</NextLink>
            </Box>
          </Box>
          <Box
            display={{ base: "none", md: "flex" }}
            p={2}
            mt="2"
            fontSize="xl"
            whileHover={{ transform: "translateY(-3px)" }}
          >
            <NextLink href="/about">ABOUT</NextLink>
          </Box>
          <Spacer />
          <Box
            display={{ base: "none", md: "flex" }}
            p={2}
            fontSize="3xl"
            whileHover={{ transform: "translateY(-3px)" }}
            ml="-1.5rem"
          >
            <NextLink href="/">MerZ</NextLink>
          </Box>
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
