import { Flex, useColorModeValue } from "@chakra-ui/react";

const ContactDetails = () => {
  return (
    <Flex
      bg={useColorModeValue("rgba(255,225,253, 0.8)", "rgba(7,7,8, 0.8)")}
      borderRadius="5px"
    ></Flex>
  );
};

export default ContactDetails;
