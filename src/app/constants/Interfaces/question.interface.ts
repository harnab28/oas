export interface IQuestion {
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

export interface IAnswer {
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
