import React, { useState } from "react";
import { fetchQuizQuestions, QuestionState } from "./API";
import { QuestionCard } from "./components/QuestionCard";
import { GlobalStyle, Wrapper } from "./App.styles";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 12;

export const App = () => {
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    setGameOver(false);

    const newQuestions = fetchQuizQuestions();

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
  };

  const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = event.currentTarget.value;
      const correct = questions[number].correct_answer === answer;

      if (correct) setScore((prev) => prev + 1);

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQuestionNumber = number + 1;
    if (nextQuestionNumber === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestionNumber);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>ВИКТОРИНА</h1>
        {gameOver && userAnswers.length !== TOTAL_QUESTIONS ? (
          <button className="start" onClick={startTrivia}>
            Старт
          </button>
        ) : null}
        {!gameOver && userAnswers.length !== TOTAL_QUESTIONS ? (
          <>
            <p className="score">Счёт: {score}</p>
            <QuestionCard
              questionNumber={number + 1}
              totalQuestions={TOTAL_QUESTIONS}
              question={questions[number].question}
              answers={questions[number].answers}
              userAnswer={userAnswers ? userAnswers[number] : undefined}
              callback={checkAnswer}
            />{" "}
          </>
        ) : null}
        {!gameOver &&
        userAnswers.length === number + 1 &&
        number !== TOTAL_QUESTIONS - 1 ? (
          <button className="next" onClick={nextQuestion}>
            Следующий вопрос
          </button>
        ) : null}
        {userAnswers.length === TOTAL_QUESTIONS ? (
          <>
            <p>Игра окончена! Покажите результат ведущему.</p>
            <p className="final_score">{score}</p>
          </>
        ) : null}
      </Wrapper>
    </>
  );
};
