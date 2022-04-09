import { Box, Text, useColorModeValue, Heading, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

import proData from "./prodata";

const MotionBox = motion(Box);

const variants = {
  hidden: { opacity: 0, y: 150, x: 0 },
  enter: { opacity: 1, y: 0, x: 0 },
  exit: { opacity: 0, y: 0, x: 100 },
};

const ProjectCard = () => {
  return (
    <>
      {proData.map((data) => (
        <MotionBox
          // variants={variants}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2, type: "just" }}
          maxW={"450px"}
          w="full"
          // bgColor={useColorModeValue("white", "rgba(7,7,8,0.9)")}
          bg="rgba(7,7,8,0.8)"
          boxShadow={"2xl"}
          rounded={"lg"}
          p={6}
          m={2}
          textAlign={"center"}
          key={data.title}
        >
          <Box>{data.img}</Box>
          <Heading fontSize="2xl">{data.title}</Heading>

          <Text
            textAlign="center"
            // color={useColorModeValue("gray.700", "gray.400")}
            color="gray.400"
            px={3}
          >
            {data.desc}
          </Text>
          <Link>{data.ghlink}</Link>
        </MotionBox>
      ))}
    </>
  );
};

export default ProjectCard;
