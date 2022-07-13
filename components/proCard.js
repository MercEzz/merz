import { ArrowDownIcon } from "@chakra-ui/icons";
import { useState } from "react";
import {
  Box,
  Text,
  useColorModeValue,
  Image,
  Heading,
  Link,
  Grid,
  GridItem,
  Flex,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import proData from "./prodata";

const MotionBox = motion(Box);

const ProjectCard = () => {
  const [display, setDisplay] = useState(false);

  const onToggle = () => {
    setDisplay(!display);
  };

  return (
    <>
      <Grid
        // h="300px"
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
              borderRadius="5px"
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
