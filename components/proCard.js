import { Box, Text, useColorModeValue, Heading, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

import proData from "./prodata";

const MotionBox = motion(Box);

const ProjectCard = () => {
  return (
    <>
      {proData.map((data) => (
        <MotionBox
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2, type: "just" }}
          maxW={"450px"}
          w="full"
          bg="rgba(255,225,253, 0.8)"
          _dark={{ bg: "rgba(7,7,8, 0.8)" }}
          boxShadow={"xl"}
          rounded={"lg"}
          p={6}
          m={2}
          textAlign={"center"}
          key={data.title}
        >
          <Box>{data.img}</Box>
          <Heading fontSize="2xl">{data.title}</Heading>

          <Text textAlign="center" px={3}>
            {data.desc}
          </Text>
          <Link>{data.ghlink}</Link>
        </MotionBox>
      ))}
    </>
  );
};

export default ProjectCard;
