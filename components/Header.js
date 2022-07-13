import {
  Box,
  Flex,
  Link,
  useColorModeValue,
  Spacer,
  Icon,
  IconButton,
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

const Header = () => {
  return (
    <>
      <Flex
        pos="fixed"
        as="nav"
        w="100%"
        align="center"
        justify="space-between"
        bg={useColorModeValue("rgba(255,225,253, 0.4)", "rgba(7,7,8, 0.4)")}
        css={{
          backdropFilter: "blur(10px)",
        }}
        zIndex="11"
      >
        <Box display={{ base: "flex", md: "none" }} w="100%" p="2">
          <Box>
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
                  "rgba(122,167,226, 0.6)",
                  "rgba(7,7,8, 0.6)"
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
          <Box p={2} fontSize="3xl" _hover={{ transform: "translateY(-3px)" }}>
            <NextLink href="/">MerZ</NextLink>
          </Box>
        </Box>
        <Flex
          display={{ base: "none", md: "flex" }}
          p="2"
          fontWeight="extrabold"
          _hover={{ color: "purple.300" }}
        >
          <NextLink href="/about">ABOUT</NextLink>
        </Flex>

        <Flex
          display={{ base: "none", md: "flex" }}
          p="2"
          fontWeight="extrabold"
          _hover={{ color: "purple.300" }}
        >
          <NextLink href="/">HOME</NextLink>
        </Flex>
        <Box display={{ base: "none", md: "flex" }} p="2">
          <ToggleTheme />
        </Box>
      </Flex>
      <Box display={{ base: "none", md: "flex" }}>
        <LeftSideBar />
        <RightSideBar />
      </Box>
      <BottomBar />
    </>
  );
};

export default Header;
