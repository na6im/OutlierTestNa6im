import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import QuestionComponent from './QuestionComponent'
import '@testing-library/jest-dom/extend-expect'

test('renders corectly', () => {
  const nextQuestionHandler = jest.fn()
  const onAnswerHandler = jest.fn()
  const question = {
    category: 'Entertainment%3A%20Video%20Games',
    type: 'multiple',
    difficulty: 'hard',
    question:
      'What%20was%20the%20name%20of%20the%20hero%20in%20the%2080s%20animated%20video%20game%20%27Dragon%27s%20Lair%27%3F',
    correct_answer: 'Dirk%20the%20Daring',
    incorrect_answers: ['Arthur', 'Sir%20Toby%20Belch', 'Guy%20of%20Gisbourne']
  }
  const { getAllByTestId, getAllByAltText, getByText } = render(
    <QuestionComponent
      question={question}
      nextQuestionHandler={nextQuestionHandler}
      onAnswerHandler={onAnswerHandler}
      end={false}
    />
  )

  expect(getAllByTestId('answer').length).toBe(4)
  expect(getAllByAltText('star').length).toBe(3)
  expect(getByText(decodeURIComponent(question.question))).toBeInTheDocument()
})

describe('<Question />', () => {
  beforeEach(() => {
    nextQuestionHandler.mockReset()
    onAnswerHandler.mockReset()
    onReset.mockReset()
  })

  const nextQuestionHandler = jest.fn()
  const onAnswerHandler = jest.fn()
  const onReset = jest.fn()
  const question = {
    category: 'Entertainment%3A%20Video%20Games',
    type: 'multiple',
    difficulty: 'hard',
    question:
      'What%20was%20the%20name%20of%20the%20hero%20in%20the%2080s%20animated%20video%20game%20%27Dragon%27s%20Lair%27%3F',
    correct_answer: 'Dirk%20the%20Daring',
    incorrect_answers: ['Arthur', 'Sir%20Toby%20Belch', 'Guy%20of%20Gisbourne']
  }

  it('Expect to not log errors in console', () => {
    const { getByText } = render(
      <QuestionComponent
        question={question}
        nextQuestionHandler={nextQuestionHandler}
        onAnswerHandler={onAnswerHandler}
        end={false}
      />
    )

    let correct = getByText(decodeURIComponent(question.correct_answer))
    fireEvent.click(correct)
    expect(onAnswerHandler).toHaveBeenCalledTimes(1)
    expect(getByText('Correct')).toBeInTheDocument()
    expect(getByText('Next question')).toBeInTheDocument()
  })

  it('should render Sorry! on incorrect Answer', () => {
    const { getByText } = render(
      <QuestionComponent
        question={question}
        nextQuestionHandler={nextQuestionHandler}
        onAnswerHandler={onAnswerHandler}
        end={false}
      />
    )

    let incorrect_answers = getByText(
      decodeURIComponent(question.incorrect_answers[0])
    )
    fireEvent.click(incorrect_answers)
    expect(onAnswerHandler).toHaveBeenCalledTimes(1)
    expect(getByText('Sorry!')).toBeInTheDocument()
    expect(getByText('Next question')).toBeInTheDocument()
  })

  it('Answering Question and asking for next', () => {
    const { getByText } = render(
      <QuestionComponent
        question={question}
        nextQuestionHandler={nextQuestionHandler}
        onAnswerHandler={onAnswerHandler}
        end={false}
      />
    )

    let incorrect_answers = getByText(
      decodeURIComponent(question.incorrect_answers[0])
    )
    fireEvent.click(incorrect_answers)

    const nextQuestion = getByText('Next question')
    expect(getByText('Sorry!')).toBeInTheDocument()
    expect(nextQuestion).toBeInTheDocument()
    expect(onAnswerHandler).toHaveBeenCalledTimes(1)

    fireEvent.click(nextQuestion)
    expect(nextQuestionHandler).toHaveBeenCalledTimes(1)
  })

  it('Showing Play again at the end', () => {
    const { getByText } = render(
      <QuestionComponent
        question={question}
        nextQuestionHandler={nextQuestionHandler}
        onAnswerHandler={onAnswerHandler}
        onReset={onReset}
        end={true}
      />
    )

    let incorrect_answers = getByText(
      decodeURIComponent(question.incorrect_answers[0])
    )
    fireEvent.click(incorrect_answers)

    expect(getByText('its the end')).toBeInTheDocument()
    expect(onAnswerHandler).toHaveBeenCalledTimes(1)
    fireEvent.click(getByText('Play again'))
    expect(onReset).toHaveBeenCalledTimes(1)
  })

  /**
   * Unskip this test to use it
   *
   * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
   */
  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild }
    } = render(
      <QuestionComponent
        question={question}
        nextQuestionHandler={nextQuestionHandler}
        onAnswerHandler={onAnswerHandler}
        end={false}
      />
    )
    expect(firstChild).toMatchSnapshot()
  })
})
