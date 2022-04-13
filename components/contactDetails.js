import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Flex,
  useColorModeValue,
  Box,
  Text,
  Icon,
  HStack,
  Divider,
  VStack,
} from "@chakra-ui/react";

const ContactDetails = () => {
  return (
    <Flex
      p="5"
      bg={useColorModeValue("rgba(255,225,253, 0.8)", "rgba(7,7,8, 0.8)")}
      borderRadius="5px"
      ml={{ base: "0", md: "5" }}
      flexDir="column"
      mt={{ base: "5", md: "0" }}
      w="auto"
      h="25rem"
    >
      <Text p="2">Contact Details</Text>
      <Divider />
      <VStack fontSize={{ base: "sm", md: "md" }} alignItems="flex-start">
        <HStack p="2">
          <PhoneIcon />
          <Text as="a" href="tel: +91 8692995854" px="2">
            +91 - 8692995854
          </Text>
        </HStack>
        <HStack p="2">
          <EmailIcon />
          <Text as="a" href="mailto: mercezz1803@gmail.com" px="2">
            mercezz1803@gmail.com
          </Text>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default ContactDetails;
