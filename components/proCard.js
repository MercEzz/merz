import {
  Box,
  Text,
  useColorModeValue,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import proData from "./prodata";

const MotionBox = motion(Box);

const ProjectCard = () => {
  return (
    <>
      <Grid
        w="full"
        templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
        gap="4"
      >
        {proData.map((data) => (
          <MotionBox
            key={data.title}
            whileHover={{ scale: 0.9 }}
            transition={{ duration: 0.3, type: "just" }}
          >
            <GridItem
              bg="rgba(255,225,253, 0.8)"
              _dark={{ bg: "rgba(7,7,8, 0.8)" }}
              width="100%"
              value={data.title}
              // h={display ? "auto" : "500px"}
            >
              <Box>
                <Image src={data.img} alt={data.title} />
              </Box>
              <Box w="100%" alignContent="center">
                <Text p="1" fontSize="lg">
                  {data.title}
                </Text>
              </Box>
            </GridItem>
          </MotionBox>
        ))}
      </Grid>
    </>
  );
};

export default ProjectCard;
