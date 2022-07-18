import { Flex, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Scrollbar from "react-scrollbars-custom";

import ProAuth from "./proauth";

import ProFoa from "./profoa";
import ProMerz from "./promerz";
import ProTuf from "./protuf";

const MotionBox = motion(Flex);

const variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const hdvariants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const Projectpg = () => {
  return (
    <Flex
      w="100%"
      h="100%"
      css={{
        backdropFilter: "blur(15px)",
      }}
      px={{ base: "1rem", md: "3rem" }}
      pt={{ base: "5rem", md: "3rem" }}
      pb={{ base: "2rem", md: "2rem" }}
      overflow="hidden"
    >
      <Scrollbar style={{ width: "100%", height: "100%" }}>
        <MotionBox
          w="100%"
          justify="center"
          variants={hdvariants}
          initial="hidden"
          animate="enter"
          transition={{ duration: 0.5, type: "just" }}
        >
          <Heading
            textAlign={{ base: "left", md: "center" }}
            mt="1rem"
            mb="2rem"
          >
            Projects
          </Heading>
        </MotionBox>
        <MotionBox
          flexDir="column"
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ duration: 1, type: "just" }}
          px={{ base: "0", md: "15rem" }}
        >
          <Flex
            flexDir={{ base: "column", lg: "column" }}
            w="100%"
            p={5}
            justifyContent="center"
          >
            <ProFoa />
            <ProMerz />
            <ProTuf />
            <ProAuth />
          </Flex>
        </MotionBox>
      </Scrollbar>
    </Flex>
  );
};

export default Projectpg;
