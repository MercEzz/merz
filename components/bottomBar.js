import {
  Box,
  Container,
  HStack,
  IconButton,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { RiSnapchatLine } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { IoLogoSteam } from "react-icons/io";
import { FiGithub } from "react-icons/fi";

const BottomBar = () => {
  return (
    <Box
      pos="fixed"
      as="nav"
      bottom="0"
      w="100%"
      bg={useColorModeValue("rgba(255,225,253)", "rgba(7,7,8, 0.4)")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex="10"
    >
      <Container maxH={"container.md"} p="2">
        <Box
          display={{ base: "flex", md: "flex" }}
          alignItems="center"
          justifyContent="center"
        >
          <HStack spacing={6}>
            <Link href="https://www.snapchat.com/add/miteshkvirash" isExternal>
              <IconButton
                _hover={{ transform: "translateY(-3px)" }}
                w="1.5rem"
                h="1.5rem"
                as={RiSnapchatLine}
                variant="ghost"
              />
            </Link>
            <Box _hover={{ transform: "translateY: '-3px" }}>
              <Link
                href="https://www.instagram.com/mitesh.virash/"
                passHref={true}
                isExternal
              >
                <IconButton
                  _hover={{ transform: "translateY(-3px)" }}
                  w="1.5rem"
                  h="1.5rem"
                  as={BsInstagram}
                  variant="ghost"
                />
              </Link>
            </Box>
            <Link href="https://github.com/MercEzz" passHref={true} isExternal>
              <IconButton
                _hover={{ transform: "translateY(-3px)" }}
                w="1.5rem"
                h="1.5rem"
                as={FiGithub}
                variant="ghost"
              />
            </Link>
            <Link
              href="https://steamcommunity.com/id/mercez1803"
              passHref={true}
              isExternal
            >
              <IconButton
                _hover={{ transform: "translateY(-3px)" }}
                w="1.5rem"
                h="1.5rem"
                as={IoLogoSteam}
                variant="ghost"
              />
            </Link>
          </HStack>
        </Box>
      </Container>
    </Box>
  );
};

export default BottomBar;
