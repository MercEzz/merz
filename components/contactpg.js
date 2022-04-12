import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Scrollbar from "react-scrollbars-custom";
import ContactForm from "./contactForm";

const MotionBox = motion(Box);

const ContactPg = () => {
  const variants = {
    hidden: { opacity: 0, x: 50, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <MotionBox
      w="100%"
      h="100%"
      variants={variants}
      initial="hidden"
      animate="enter"
      alignItems="center"
      mt="4rem"
    >
      <Scrollbar>
        <Heading textAlign="center" mb="2rem">
          Contact
        </Heading>
        <ContactForm />
      </Scrollbar>
    </MotionBox>
  );
};

export default ContactPg;
