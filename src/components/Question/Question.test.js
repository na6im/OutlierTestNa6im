import React from 'react'
import { render } from '@testing-library/react'
import QuestionComponent from './QuestionComponent'

test('renders learn react link', () => {
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
  const { getByText } = render(
    <QuestionComponent
      question={question}
      nextQuestionHandler={nextQuestionHandler}
      onAnswerHandler={onAnswerHandler}
      end={false}
    />
  )

  let correct = getByText(decodeURIComponent(question.correct_answer))
  console.log(correct)
})

test('renders learn react wrong', () => {
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
  const { getByText } = render(
    <QuestionComponent
      question={question}
      nextQuestionHandler={nextQuestionHandler}
      onAnswerHandler={onAnswerHandler}
      end={false}
    />
  )

  //console.log('second', question)
})
