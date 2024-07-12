import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

export const QuizResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { correctAnswers } = location.state;
  const toHome = () => {
    navigate("/");
  };
  return (
    <>
      <Flex align="center" justify="center" h="90vh">
        <Box textAlign="center" boxShadow="lg" p="100px" bg="white">
          {correctAnswers===5 ? (<Text fontSize="xl" mb="10px" color="red">全問正解です！🎉</Text>):(
          <Text fontSize="xl" mb="10px" color="teal">5問中{correctAnswers}問正解しました！</Text>
          )}
          
          <Button onClick={toHome}>HOME画面に戻る</Button>
        </Box>
      </Flex>
    </>
  );
};
