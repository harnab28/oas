export const CONST_QUESTION_LIST = {
  listOfMultipleAnswerTypeMcq: [
    {
      questionId: 1,
      questionDifficulty: "EASY",
      questionType: "MCQ_MULTIPLE",
      questionTag: "Yo",
      questionCreationTimestamp: "2020-09-09T13:34:37.3221172",
      questionUpdateTimestamp: "2020-09-09T13:34:37.3221172",
      questionMarks: 100.0,
      questionNegativeMarks: -9.0,
      class: 10,
      questionSubject: "Phy",
      questionText: "What is an ohm?",
      options: ["DCS", "SS", "gg", "ww"],
      answers: ["DCS", "SS"],
    },
  ],
  listOfSingleAnswerTypeMcq: [
    {
      questionId: 2,
      questionDifficulty: "EASY",
      questionType: "MCQ_SINGLE",
      questionTag: "Yo",
      questionCreationTimestamp: "2020-09-09T13:34:37.3221172",
      questionUpdateTimestamp: "2020-09-09T13:34:37.3221172",
      questionMarks: 100.0,
      questionNegativeMarks: -9.0,
      class: 10,
      questionSubject: "English",
      questionText: "Who was shamu?",
      options: ["AB", "BC", "CD", "DE"],
      answer: "AB",
    },
  ],
};

export const QUESTION_TYPES = {
  MCQ_SINGLE: "MCQ_SINGLE",
  MCQ_MULTIPLE: "MCQ_MULTIPLE",
};
