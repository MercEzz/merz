import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Scrollbar from "react-scrollbars-custom";
import ProjectCard from "./proCard";

const MotionBox = motion(Flex);

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
        transition={{ duration: 0.7, type: "just" }}
        w="100%"
        h="100%"
        css={{
          backdropFilter: "blur(15px)",
        }}
        pt={{ base: "5rem", md: "3rem" }}
        pb={{ base: "2rem", md: "2rem" }}
        overflow="auto"
      >
        <Scrollbar style={{ width: "100%", height: "100%" }}>
          <Heading
            textAlign={{ base: "left", md: "center" }}
            mt="1rem"
            mb="2rem"
          >
            Projects
          </Heading>
          <Flex
            flexDir={{ base: "column", md: "column", lg: "row" }}
            alignItems="center"
            px={{ base: "1rem", md: "10rem" }}
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
