import {
  Alert,
  AlertIcon,
  Box,
  Button,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Heading,
  List,
  ListItem,
  Progress,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const QuizPage = () => {
  const navigate = useNavigate();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState<
    "success" | "error" | "info" | "warning"
  >("info");
  const [countdown, setCountdown] = useState(15);
  const [correctAnswers,setCorrectAnswers] = useState(0);

  const questions = [
    {
      question: "Reactに当てはまるものはどれですか？",
      options: ["フレームワーク", "ライブラリ", "データベース", "プログラミング言語"],
      answer: "ライブラリ",
    },
    {
      question: "Reactコンポーネントの主な役割は何ですか？",
      options: ["スタイルを定義する", "データベースとやり取りする", "UIを構築する", "サーバーサイドで動作する"],
      answer: "UIを構築する",
    },
    {
      question: "Reactで状態を管理するためのフックはどれですか？",
      options: ["useEffect", "useState", "useRef", "useReducer"],
      answer: "useState",
    },
    {
      question: "Reactのコンポーネントで副作用を処理するために使用するフックはどれですか？",
      options: ["useState", "useEffect", "useContext", "useMemo"],
      answer: "useEffect",
    },
    {
      question: "Reactでコンポーネント間でデータを渡すために使用するのは何ですか？",
      options: ["state", "props", "context", "refs"],
      answer: "props",
    },
  ];
   // カウントダウン開始の処理
   useEffect(() => {
    let timer: any = null;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCount) => prevCount - 1);
      }, 1000);
    } else {
      // カウントダウンが0になったら結果表示画面に遷移
      navigate("/quizResult", { state: { correctAnswers } });
    }

    return () => clearInterval(timer); // クリーンアップ関数でタイマーをクリア
  }, [countdown, navigate, correctAnswers]);

  const handleAnswerClick = (option: string) => {
    if (option === questions[questionIndex].answer) {
      setMessage("正解です!その調子👍");
      setMessageColor("success");
      setCorrectAnswers((prevCount) => prevCount + 1); // 正解した回数をインクリメント
      // 次の質問に進む
      if (questionIndex + 1 < questions.length) {
        setTimeout(() => {
          setQuestionIndex((prevIndex) => prevIndex + 1);
          setMessage("");
        }, 1000);
      } else {
        // もし最後の質問ならば、クイズ終了して結果表示画面へ
        setTimeout(() => {
          navigate("/quizResult", { state: { correctAnswers: correctAnswers+1 } });
        }, 1000);
      }
    } else {
      setMessage("残念!不正解です...");
      setMessageColor("error");
    }
  };

  // プログレスバーの値を計算
  const progressValue = (countdown / 15) * 100;

  return (
    <Flex align="center" justify="center" h="90vh" direction="column">
      <Box
        textAlign="center"
        boxShadow="lg"
        p="100px"
        bg="white"
        borderRadius="100"
      >
        <CircularProgress value={progressValue} mb="15px" size="100px" color="teal">
          <CircularProgressLabel >{countdown}</CircularProgressLabel>
        </CircularProgress>
        <Heading mb={10}>Q: {questions[questionIndex].question}</Heading>
        <List spacing={5}>
          <Flex direction="row" wrap="wrap" justify="center">
            {questions[questionIndex].options.map((option, index) => (
              <ListItem key={index} mx={3}>
                <Button
                  onClick={() => handleAnswerClick(option)}
                  colorScheme="teal"
                  color="white"
                >
                  {option}
                </Button>
              </ListItem>
            ))}
          </Flex>
        </List>
        {message && (
          <Alert mt={10} status={messageColor} variant="left-accent">
            <AlertIcon />
            {message}
          </Alert>
        )}
      </Box>
    </Flex>
  );
};
