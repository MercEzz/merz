import { Flex, Heading, Modal, useDisclosure } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Scrollbar from "react-scrollbars-custom";
import ProjectCard from "./proCard";

const MotionBox = motion(Flex);

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0 },
};

const Projectpg = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
      overflow="auto"
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
            Projects
          </Heading>
          <Flex
            flexDir={{ base: "column", md: "column", lg: "row" }}
            w="100%"
            h="100%"
            p={5}
            justifyContent="center"
          >
            <ProjectCard />
          </Flex>
        </MotionBox>
      </Scrollbar>
    </Flex>
  );
};

export default Projectpg;
