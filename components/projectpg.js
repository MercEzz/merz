import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Scrollbar from "react-scrollbars-custom";
import ProjectCard from "./proCard";

const MotionBox = motion(Box);

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0 },
};

const Projectpg = () => {
  return (
    <>
      <MotionBox
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ duration: 0.5, type: "just" }}
        textAlign={"center"}
        w="100%"
        h="100%"
        css={{
          backdropFilter: "blur(15px)",
        }}
        px="3rem"
        py="3.6rem"
        overflow="auto"
      >
        <Scrollbar style={{ width: "100%", height: "100%" }}>
          <Heading mb="5">Projects</Heading>
          <Flex
            display={"flex"}
            flexDir={{ base: "column", md: "column", lg: "row" }}
            alignItems="center"
            px="10rem"
            justifyContent="center"
          >
            <ProjectCard />
          </Flex>
        </Scrollbar>
      </MotionBox>
    </>
  );
};

export default Projectpg;
