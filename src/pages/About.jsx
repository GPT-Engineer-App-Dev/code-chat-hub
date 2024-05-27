import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box p={4}>
      <Heading mb={4}>About Tech Forum</Heading>
      <Text fontSize="lg">
        Tech Forum is a place for technology enthusiasts to discuss and share knowledge on various tech-related topics. Whether you're a programmer, hardware geek, or just someone interested in technology, you'll find a community here.
      </Text>
    </Box>
  );
};

export default About;