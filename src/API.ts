import { shuffleArray } from "./utils";
import { questions } from "./questions";

export type Question = {
  correct_answer: string;
  incorrect_answers: string[];
  question: string;
};

export type QuestionState = Question & { answers: string[] };

export const fetchQuizQuestions = () => {
  const questionsWithAnswers = questions.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));

  return shuffleArray(questionsWithAnswers);
};
