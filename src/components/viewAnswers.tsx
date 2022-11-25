import { questionType } from "../models/questionAnswer";
import { ViewQAProps } from "../models/viewQAProps";

const ViewAnswers: React.FC<ViewQAProps> = ({ allQA }: ViewQAProps) => {
    
    return (
        <div className="view-container" data-testid="showAnswers">
        <h5> Thank you for your feedback!</h5>
        {allQA.map((QA: questionType, index) => {
            return <div key={index} className='p-2'>
                <div>{QA.id}. {QA.question}</div>
                <div className="answer"> {QA.userInput} </div>
            </div>
        })}

    </div>
    )
}

export default ViewAnswers;