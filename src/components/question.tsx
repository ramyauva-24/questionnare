import React from "react";
import { typeConstant } from "../constants/TypeConstant";
import { questionAnswerProps } from "../models/questionAnswer";

const Question: React.FC<questionAnswerProps> = ({ questionData, changeValue }: questionAnswerProps) => {

    const { name, type, question, answerOptions } = questionData;

    const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        changeValue({ ...questionData, userInput: value })
    }

    const handleCheckBox = (value: string, checked: boolean) => {
        const QAarray = questionData.userInput ? questionData.userInput.split(',') : []
        if (checked) {
            return [...QAarray, value].toString()
        } else {
            return QAarray.filter(item => item !== value).toString()
        }
    }

    const handleRadiobox = (value: string, checked: boolean) => {
        return checked ? value : '';
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target as HTMLInputElement;
        let updatedValue = ''
        if (name === typeConstant.CHECKTYPE) {
            updatedValue = handleCheckBox(value, checked)
        } else updatedValue = handleRadiobox(value, checked)
        console.log(updatedValue, questionData);

        changeValue({ ...questionData, userInput: updatedValue })
    }

    return (
        <div className="question-container">
            <div className="pb-1">{question} </div>
            {name === typeConstant.FREEFORMTYPE
                ? <textarea className="form-control" onChange={handleCommentChange} />
                : (name === typeConstant.RADIOTYPE || name === typeConstant.CHECKTYPE)
                && (answerOptions.length && answerOptions.map((answer, index) => {
                    return <div className="form-check" key={answer + index}>
                        <input className='form-check-input' id={answer} value={answer} name={name} type={type} onChange={handleChange} />
                        <label htmlFor={answer} className="form-check-label" >
                            <span>{answer}</span>
                        </label></div>
                }))

            }
        </div>
    )
}

export default Question;