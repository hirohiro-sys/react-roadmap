import {
  ChakraProvider,
} from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QuizHome } from "./components/quizHome";
import { QuizPage } from "./components/quizPage";
import { QuizResult } from "./components/quizResult";
import theme from "./theme/theme";

export const App = () => (
  <ChakraProvider theme={theme}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuizHome />} />
        <Route path="/quizPage" element={<QuizPage />} />
        <Route path="/quizResult" element={<QuizResult />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
