import { Container, Flex, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Scrollbar from "react-scrollbars-custom";
import Bio from "./bio";
import Skills from "./skills";

const MotionBox = motion(Flex);

const variants = {
  hidden: { opacity: 0, x: 0, y: -50 },
  enter: { opacity: 1, x: 0, y: 0 },
};

const AboutMe = () => {
  return (
    <Flex
      w="100%"
      h="100%"
      px="3rem"
      pt={{ base: "5rem", md: "3rem" }}
      pb={{ base: "2rem", md: "2rem" }}
      overflow="auto"
      css={{
        backdropFilter: "blur(15px)",
      }}
    >
      <Scrollbar style={{ width: "100%", height: "100%" }}>
        <MotionBox
          flexDir="column"
          variants={variants}
          initial="hidden"
          animate="enter"
          transition={{ duration: 0.5, type: "just" }}
          px={{ base: "0", md: "10rem" }}
        >
          <Heading
            textAlign={{ base: "left", md: "center" }}
            mt="1rem"
            mb="2rem"
          >
            About Me
          </Heading>
          <Flex
            display={"flex"}
            flexDir="column"
            w="100%"
            h="100%"
            p={5}
            justifyContent="center"
          >
            <Bio />
            <Skills />
          </Flex>
        </MotionBox>
      </Scrollbar>
    </Flex>
  );
};

export default AboutMe;
