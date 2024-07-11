import { Box, Button, Flex, Heading } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";

export const QuizHome = () => {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate('/quizPage');
  };
    return (
        <Flex align="center" justify="center" h="90vh">
        <Box textAlign="center" boxShadow="lg" p="100px" bg="white">
          <Heading mb={10}>React理解度チェックアプリ</Heading>
          <Button colorScheme="teal" onClick={startQuiz}>クイズスタート！</Button>
        </Box>
      </Flex>
    )
}