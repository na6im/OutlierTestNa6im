import React, { useState, useEffect } from 'react'
import { Title, Category, Question, QuestionCore, AnswerButton } from './styles'

function QuestionComponent ({ question }) {
  const [answers, setAnswers] = useState([])

  useEffect(() => {
    const answerOptions = question.incorrect_answers
    answerOptions.splice(
      Math.floor(Math.random() * Math.floor(3)),
      0,
      question.correct_answer
    )
    setAnswers(answerOptions)
  }, [])
  return (
    <React.Fragment>
      <Title>Question 16 of 20</Title>
      <Category>Entertaiment: Board Games</Category>
      <Question>
        <QuestionCore style={{ gridArea: 'question' }}>
          {decodeURIComponent(question.question)}
        </QuestionCore>
        {answers.map((answer, index) => (
          <AnswerButton>{decodeURIComponent(answer)}</AnswerButton>
        ))}
      </Question>
    </React.Fragment>
  )
}

export default QuestionComponent
