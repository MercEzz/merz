import { Box, Container, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Scrollbar } from "react-scrollbars-custom";
import Bio from "./bio";
import Skills from "./skills";

const MotionBox = motion(Box);

const variants = {
  hidden: { opacity: 0, x: 0, y: -50 },
  enter: { opacity: 1, x: 0, y: 0 },
};

const AboutMe = () => {
  return (
    <>
      <MotionBox
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ duration: 0.5, type: "just" }}
        textAlign={"center"}
        w="93vw"
        mt={{ base: "2rem", md: "4rem" }}
        color="white"
        zIndex="15"
        h="80vh"
      >
        <Scrollbar
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <Heading mb="5">About Me</Heading>
          <Container
            display={"flex"}
            flexDir="column"
            maxW="container.lg"
            p={5}
            justifyContent="center"
          >
            <Bio />
            <Skills />
          </Container>
        </Scrollbar>
      </MotionBox>
    </>
  );
};

export default AboutMe;
