interface TextProps {
  text: string;
  hint: string;
}

interface Line {
  start: TextProps[];
  underline: TextProps[];
  end: TextProps[];
}

interface Answer {
  id: number;
  text: string;
}

interface Exercise {
  questionLine: Line;
  answerLine: Line;
  answers: Answer[];
  correctAnswerId: number;
}
