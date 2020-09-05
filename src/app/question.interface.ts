 export interface question {
    questionId: number;
    questionType: string;
    questionText: string;
    questionDifficulty: string;
    option1: string;
    option2: string;
    option3: string;
    option4: string;
    correctOption: string[];
    marksAllocated: number;
  }

  export interface answer {
    questionId: number;
    questionType: string;
    questionText: string;
    questionDifficulty: string;
    option1: string;
    option2: string;
    option3: string;
    option4: string;
    correctOption: string[];
    marksAllocated: number;
    selectedOption: string[];
    allotedMarks: number;

  }


export const QuestionBank: question[] = [
    {
        "questionId": 1,
        "questionType": "mcq_single_answer",
        "questionText": "question_text_1",
        "questionDifficulty": "medium",
        "option1": "option_text_1",
        "option2": "option_text_2",
        "option3": "option_text_3",
        "option4": "option_text_4",
        "correctOption": [
            "option_text_1"
        ],
        "marksAllocated": 10
    },
    {
        "questionId": 2,
        "questionType": "mcq_single_answer",
        "questionText": "question_text_2",
        "questionDifficulty": "easy",
        "option1": "option_text_1",
        "option2": "option_text_2",
        "option3": "option_text_3",
        "option4": "option_text_4",
        "correctOption": [
            "option_text_2"
        ],
        "marksAllocated": 10
    },
    {
        "questionId": 3,
        "questionType": "mcq_single_answer",
        "questionText": "question_text_3",
        "questionDifficulty": "medium",
        "option1": "option_text_1",
        "option2": "option_text_2",
        "option3": "option_text_3",
        "option4": "option_text_4",
        "correctOption": [
            "option_text_1"
        ],
        "marksAllocated": 10
    },
    {
        "questionId": 4,
        "questionType": "mcq_single_answer",
        "questionText": "question_text_4",
        "questionDifficulty": "easy",
        "option1": "option_text_1",
        "option2": "option_text_2",
        "option3": "option_text_3",
        "option4": "option_text_4",
        "correctOption": [
            "option_text_2"
        ],
        "marksAllocated": 20
    },
    {
        "questionId": 5,
        "questionType": "mcq_single_answer",
        "questionText": "question_text_5",
        "questionDifficulty": "medium",
        "option1": "option_text_1",
        "option2": "option_text_2",
        "option3": "option_text_3",
        "option4": "option_text_4",
        "correctOption": [
            "option_text_1"
        ],
        "marksAllocated": 20
    },
    {
        "questionId": 6,
        "questionType": "mcq_single_answer",
        "questionText": "question_text_6",
        "questionDifficulty": "easy",
        "option1": "option_text_1",
        "option2": "option_text_2",
        "option3": "option_text_3",
        "option4": "option_text_4",
        "correctOption": [
            "option_text_2"
        ],
        "marksAllocated": 10
    },
    {
        "questionId": 7,
        "questionType": "mcq_single_answer",
        "questionText": "question_text_7",
        "questionDifficulty": "medium",
        "option1": "option_text_1",
        "option2": "option_text_2",
        "option3": "option_text_3",
        "option4": "option_text_4",
        "correctOption": [
            "option_text_1"
        ],
        "marksAllocated": 20
    },
    {
        "questionId": 8,
        "questionType": "mcq_single_answer",
        "questionText": "question_text_8",
        "questionDifficulty": "easy",
        "option1": "option_text_1",
        "option2": "option_text_2",
        "option3": "option_text_3",
        "option4": "option_text_4",
        "correctOption": [
            "option_text_2"
        ],
        "marksAllocated": 10
    },
    {
        "questionId": 9,
        "questionType": "mcq_single_answer",
        "questionText": "question_text_9",
        "questionDifficulty": "hard",
        "option1": "option_text_1",
        "option2": "option_text_2",
        "option3": "option_text_3",
        "option4": "option_text_4",
        "correctOption": [
            "option_text_1"
        ],
        "marksAllocated": 30
    },
    {
        "questionId": 10,
        "questionType": "mcq_single_answer",
        "questionText": "question_text_10",
        "questionDifficulty": "easy",
        "option1": "option_text_1",
        "option2": "option_text_2",
        "option3": "option_text_3",
        "option4": "option_text_4",
        "correctOption": [
            "option_text_2"
        ],
        "marksAllocated": 10
    },
    {
        "questionId": 11,
        "questionType": "mcq_multiple_answer",
        "questionText": "question_text_11",
        "questionDifficulty": "medium",
        "option1": "option_text_1",
        "option2": "option_text_2",
        "option3": "option_text_3",
        "option4": "option_text_4",
        "correctOption": [
            "option_text_1",
            "option_text_2"
        ],
        "marksAllocated": 10
    },
    {
        "questionId": 12,
        "questionType": "mcq_multiple_answer",
        "questionText": "question_text_12",
        "questionDifficulty": "easy",
        "option1": "option_text_1",
        "option2": "option_text_2",
        "option3": "option_text_3",
        "option4": "option_text_4",
        "correctOption": [
            "option_text_2",
            "option_text_3"
        ],
        "marksAllocated": 10
    },
    {
        "questionId": 13,
        "questionType": "mcq_multiple_answer",
        "questionText": "question_text_13",
        "questionDifficulty": "medium",
        "option1": "option_text_1",
        "option2": "option_text_2",
        "option3": "option_text_3",
        "option4": "option_text_4",
        "correctOption": [
            "option_text_3",
            "option_text_4"
        ],
        "marksAllocated": 20
    },
    {
        "questionId": 14,
        "questionType": "mcq_multiple_answer",
        "questionText": "question_text_14",
        "questionDifficulty": "easy",
        "option1": "option_text_1",
        "option2": "option_text_2",
        "option3": "option_text_3",
        "option4": "option_text_4",
        "correctOption": [
            "option_text_1",
            "option_text_2"
        ],
        "marksAllocated": 10
    },
    {
        "questionId": 15,
        "questionType": "mcq_multiple_answer",
        "questionText": "question_text_15",
        "questionDifficulty": "medium",
        "option1": "option_text_1",
        "option2": "option_text_2",
        "option3": "option_text_3",
        "option4": "option_text_4",
        "correctOption": [
            "option_text_2",
            "option_text_3"
        ],
        "marksAllocated": 20
    },
    {
        "questionId": 16,
        "questionType": "mcq_multiple_answer",
        "questionText": "question_text_16",
        "questionDifficulty": "easy",
        "option1": "option_text_1",
        "option2": "option_text_2",
        "option3": "option_text_3",
        "option4": "option_text_4",
        "correctOption": [
            "option_text_3",
            "option_text_4"
        ],
        "marksAllocated": 10
    },
    {
        "questionId": 17,
        "questionType": "mcq_multiple_answer",
        "questionText": "question_text_17",
        "questionDifficulty": "medium",
        "option1": "option_text_1",
        "option2": "option_text_2",
        "option3": "option_text_3",
        "option4": "option_text_4",
        "correctOption": [
            "option_text_1",
            "option_text_2"
        ],
        "marksAllocated": 10
    },
    {
        "questionId": 18,
        "questionType": "mcq_multiple_answer",
        "questionText": "question_text_18",
        "questionDifficulty": "easy",
        "option1": "option_text_1",
        "option2": "option_text_2",
        "option3": "option_text_3",
        "option4": "option_text_4",
        "correctOption": [
            "option_text_2",
            "option_text_3"
        ],
        "marksAllocated": 20
    },
    {
        "questionId": 19,
        "questionType": "mcq_multiple_answer",
        "questionText": "question_text_19",
        "questionDifficulty": "hard",
        "option1": "option_text_1",
        "option2": "option_text_2",
        "option3": "option_text_3",
        "option4": "option_text_4",
        "correctOption": [
            "option_text_3",
            "option_text_4"
        ],
        "marksAllocated": 10
    },
    {
        "questionId": 20,
        "questionType": "mcq_multiple_answer",
        "questionText": "question_text_20",
        "questionDifficulty": "easy",
        "option1": "option_text_1",
        "option2": "option_text_2",
        "option3": "option_text_3",
        "option4": "option_text_4",
        "correctOption": [
            "option_text_1",
            "option_text_2"
        ],
        "marksAllocated": 10
    }
];