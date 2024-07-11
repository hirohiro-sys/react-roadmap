import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Button,
  Heading,
  Flex,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

export const App = () => (
  <ChakraProvider>
    <Flex align="center" justify="center" h="90vh">
      <Box textAlign="center" boxShadow="lg" p="100px">
        <Heading mb={10}>React理解度チェックアプリ</Heading>
        <Button colorScheme="teal">クイズスタート！</Button>
      </Box>
    </Flex>
  </ChakraProvider>
);
