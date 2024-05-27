import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading>Welcome to Tech Forum</Heading>
        <Text fontSize="lg">Join the discussion and share your knowledge with the tech community.</Text>
      </VStack>
    </Container>
  );
};

export default Index;