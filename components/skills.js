import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";

const Skills = () => {
  return (
    <Box
      p="2"
      mt="5"
      bg={useColorModeValue("rgba(255,225,253, 0.4)", "rgba(7,7,8, 0.8)")}
      borderRadius="5px"
    >
      <Heading textAlign="left" p="4" fontSize="lg">
        Skills
      </Heading>
      <Divider />
      <Flex p="2" m="2" flexDir={{ base: "column", md: "row" }}>
        <Box p="2">
          <Text textAlign="centerkl" fontWeight="bold">
            React.js
          </Text>
          <Image
            src="/images/react.png"
            borderRadius="lg"
            bgSize="cover"
            alt="react"
          />
        </Box>
        <Box p="2">
          <Text textAlign="centerkl" fontWeight="bold">
            Next.js
          </Text>
          <Image
            src={useColorModeValue("/images/next.png", "/images/whitenext.png")}
            borderRadius="lg"
            bgSize="cover"
            alt="next"
          />
        </Box>
        <Box p="2">
          <Text textAlign="centerkl" fontWeight="bold">
            Node.js
          </Text>
          <Image
            src="/images/node.png"
            borderRadius="lg"
            bgSize="cover"
            alt="node"
          />
        </Box>
        <Box p="2">
          <Text textAlign="centerkl" fontWeight="bold">
            Redux
          </Text>
          <Image
            src={useColorModeValue(
              "/images/redux.png",
              "/images/whiteredux.png"
            )}
            borderRadius="lg"
            bgSize="cover"
            alt="redux"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Skills;
