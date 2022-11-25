import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import Question from './components/question';
import { quesionnaireData } from './data/data';
import ViewAnswers from './components/viewAnswers';

test('renders Questionnaire App link', () => {
  render(<App />);
  const linkElement = screen.getByText("Questionnaire App");
  expect(linkElement).toBeInTheDocument();
});

test('should enable next button', () => {
  render(<App />);
  render(<Question questionData={quesionnaireData[0]}  changeValue={jest.fn()}/>)
  const button = screen.getByText('Next');
  expect(button).toHaveAttribute('disabled');
  const labelRadio: HTMLInputElement = screen.getByLabelText('Yes');
  fireEvent.click(labelRadio);
  expect(button).not.toBeDisabled();
})

test('should change the radio value' , () => {
  render(<App/>)
  render(<Question questionData={quesionnaireData[0]}  changeValue={jest.fn()}/>)
  const labelRadio: HTMLInputElement = screen.getByLabelText('Yes');
  expect(labelRadio.checked).toEqual(false);
  fireEvent.click(labelRadio);
  expect(labelRadio.checked).toEqual(true);
})

test('should change the checkBox value' , () => {
  render(<App/>)
  render(<Question questionData={quesionnaireData[1]}  changeValue={jest.fn()}/>)
  const labelCheck: HTMLInputElement = screen.getByLabelText('Great');
  expect(labelCheck.checked).toEqual(false);
 fireEvent.click(labelCheck);
  expect(labelCheck.checked).toEqual(true);
})

test('renders View Answer', () => {
  render(<App/>)
  render(<ViewAnswers allQA={quesionnaireData} />);
  const viewAnswerElement = screen.getByTestId("showAnswers");
  expect(viewAnswerElement).toBeInTheDocument();
});


