import { Box, Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";

const Skills = () => {
  return (
    <Box p="2" mt="5" bg="rgba(7,7,8,0.9)" borderRadius="5px">
      <Heading textAlign="left" p="4" fontSize="lg">
        Skills
      </Heading>
      <Divider />
      <Flex p="2" m="2" flexDir="row">
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
            src="/images/next.png"
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
            bg="black"
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
            src="/images/redux.jpg"
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
