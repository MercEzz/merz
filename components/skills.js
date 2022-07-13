import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Skills = () => {
  return (
    <Flex
      flexDir="column"
      p="2"
      mt="5"
      bg={useColorModeValue("rgba(255,225,253, 0.4)", "rgba(7,7,8, 0.8)")}
    >
      <Heading textAlign="left" p="4" fontSize="lg">
        Skills
      </Heading>
      <Divider />
      <Flex p="2" m="2" flexDir={{ base: "column", md: "row" }}>
        {data.map((obj) => (
          <>
            <Flex p="2" flexDir="column">
              <Text textAlign="center" fontWeight="bold">
                {obj.title}
              </Text>
              <Image
                src={obj.src}
                borderRadius="lg"
                bgSize="cover"
                alt="react"
              />
            </Flex>
          </>
        ))}
      </Flex>
    </Flex>
  );
};

const data = [
  {
    title: "React.js",
    src: "/images/react.png",
    srcDark: "/images/react.png",
  },
  {
    title: "Next.js",
    src: "/images/next.png",
    srcDark: "/images/whitenext.png",
  },
  {
    title: "Node.js",
    src: "/images/node.png",
    srcDark: "/images/node.png",
  },
  {
    title: "Redux",
    src: "/images/redux.png",
    srcDark: "/images/whiteredux.png",
  },
];

export default Skills;
