import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const QuizPage = () => {
    const navigate = useNavigate();
    const [questionIndex, setQuestionIndex] = useState(0);
    const questions = [
        {
          question: 'Reactに当てはまるものを選べ',
          options: ['フレームワーク', 'ライブラリ', 'DB', 'モジュール'],
          answer: 'ライブラリ'
        },
        {
          question: '2 + 2は？',
          options: ['3', '4', '5', '6'],
          answer: '4'
        },
      ];
      const handleAnswerClick = (option: string) => {
        if (option === questions[questionIndex].answer) {
          alert("Correct!");
        } else {
          alert("Incorrect!");
        }
        // 次の質問に進む
        if (questionIndex + 1 < questions.length) {
          setQuestionIndex((prevIndex) => prevIndex + 1);
        } else {
          // もし最後の質問ならば、クイズ終了
          alert("Quiz finished!");
          // ここで何かクイズ終了後の処理を行う
          navigate("/");
        }
      };
      return (
        <div>
          <h2>{questions[questionIndex].question}</h2>
          <ul>
            {questions[questionIndex].options.map((option, index) => (
              <li key={index}>
                <button onClick={() => handleAnswerClick(option)}>{option}</button>
              </li>
            ))}
          </ul>
        </div>
      );
}