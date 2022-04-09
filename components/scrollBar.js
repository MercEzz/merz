import { Box } from "@chakra-ui/react";

const ScrollBar = () => {
  return (
    <Box
      mr="-1.5rem"
      float="left"
      h="14rem"
      w="4rem"
      bg="gray.900"
      overflowY="scroll"
    >
      <Box />
    </Box>
  );
};

export default ScrollBar;
