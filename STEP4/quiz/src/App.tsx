import {
  ChakraProvider,
} from "@chakra-ui/react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { QuizHome } from "./components/quizHome";
import { QuizPage } from "./components/quizPage";
import theme from "./theme/theme";

export const App = () => (
  <ChakraProvider theme={theme}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuizHome />} />
        <Route path="/quizPage" element={<QuizPage />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
