import { Box, Container, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Bio from "./bio";

const MotionBox = motion(Box);

const variants = {
  hidden: { opacity: 0, x: 0, y: -50 },
  enter: { opacity: 1, x: 0, y: 0 },
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
        mt={{ base: "2rem", md: "4rem" }}
        color="white"
      >
        <Heading mb="5">About Me</Heading>
        <Container
          display={"flex"}
          flexDir="row"
          maxW="container.lg"
          p={5}
          justifyContent="center"
        >
          <Bio />
        </Container>
      </MotionBox>
    </>
  );
};

export default Projectpg;
