import { Box, Text, Image, Grid, GridItem, Flex } from "@chakra-ui/react";
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
            // whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3, type: "easeIn" }}
            cursor="pointer"
            whileTap={{ scale: 0.9 }}
          >
            <GridItem
              bg="rgba(255,225,253, 0.4)"
              _dark={{ bg: "rgba(7,7,8, 0.8)" }}
              width="100%"
              value={data.title}
              p="4"
            >
              <Image src={data.img} alt={data.title} />
              <Flex w="100%">
                <Text p="2">{data.title}</Text>
              </Flex>
            </GridItem>
          </MotionBox>
        ))}
      </Grid>
    </>
  );
};

export default ProjectCard;
