import {
  Box,
  Button,
  Flex,
  Heading,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaReact } from "react-icons/fa";

export const QuizHome = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate("/quizPage");
  };
  return (
    <Flex align="center" justify="center" h="90vh">
      <Box textAlign="center" boxShadow="lg" p="100px" bg="white">
      <Flex align="center" mb={10}>
        <FaReact size={30}  color="teal" style={{ marginRight: '10px' ,marginTop: "3px"}} />
        <Heading as="h1" size="lg">
          React理解度チェックアプリ
        </Heading>
      </Flex>
        <Button colorScheme="teal" onClick={startQuiz} mr="10px">
          クイズスタート！
        </Button>
        <Button onClick={onOpen}>ルール確認</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>ルール</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <UnorderedList>
                <ListItem>クイズは全部で5問あります。</ListItem>
                <ListItem>制限時間は15秒です。</ListItem>
                <ListItem>
                  クイズはudemy講座の「モダンJavaScriptの基礎から始める挫折しないためのReact入門」の範囲から出題します。
                </ListItem>
              </UnorderedList>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                閉じる
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Flex>
  );
};
