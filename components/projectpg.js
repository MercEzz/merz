import { Box, Container, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
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
        w="full"
        mt={{ base: "5rem", md: "5rem" }}
        overflowY="auto"
        mb="5"
      >
        <Heading mb="5">Projects</Heading>
        <Container
          display={"flex"}
          flexDir={{ base: "column", md: "column", lg: "row" }}
          maxW="container.md"
          alignItems="center"
          p={5}
          justifyContent="center"
        >
          <ProjectCard />
        </Container>
      </MotionBox>
    </>
  );
};

export default Projectpg;
