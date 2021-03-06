import { Box, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const variants = {
  hidden: { opacity: 0, y: -50, x: 0 },
  enter: { opacity: 1, y: 0, x: 0 },
  exit: { opacity: 0, y: 0, x: -100 },
};

const vari = {
  hidden: { opacity: 0, y: 50, x: 0 },
  enter: { opacity: 1, y: 0, x: 0 },
  exit: { opacity: 0, y: 0, x: 100 },
};

const MainTitle = () => {
  return (
    <>
      <MotionBox
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
      >
        <Heading as="h1" color="white" fontSize="5xl">
          Mitesh Virash
        </Heading>
      </MotionBox>
      <MotionBox variants={vari} initial="hidden" animate="enter" exit="exit">
        <Text fontWeight="bold">
          You are worth more than second thoughts and maybes
        </Text>
      </MotionBox>
    </>
  );
};

export default MainTitle;
