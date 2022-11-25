export type questionType = {
    id: number,
    name: string,
    type: string,
    question: string,
    answerOptions: string[],
    userInput: string
};

export interface questionAnswerProps {
    questionData: questionType
    changeValue: (a: questionType) => void
}