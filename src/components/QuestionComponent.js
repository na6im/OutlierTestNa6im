import React, { useState, useEffect } from 'react'
import { Title, Category, Question, QuestionCore, AnswerButton } from './styles'
import star from '../blackStar.png'

function QuestionComponent ({ question }) {
  const [answers, setAnswers] = useState([])
  const [answered, setAnswered] = useState()

  useEffect(() => {
    const answerOptions = question.incorrect_answers
    answerOptions.splice(
      Math.floor(Math.random() * Math.floor(3)),
      0,
      question.correct_answer
    )
    setAnswers(answerOptions)
  }, [])
  {
    //TODO stars
  }

  function getAnswerColor (answer) {
    if (answer === question.correct_answer) return 'black'
    if (answer === answered) return 'white'
  }

  return (
    <React.Fragment>
      <Title>Question 16 of 20</Title>
      <Category>Entertaiment: Board Games</Category>
      <div>
        <img
          src={star}
          style={{ height: '10px', width: '10px', stroke: 'blue' }}
        />
        <img
          src={star}
          style={{ height: '10px', width: '10px', stroke: 'blue' }}
        />
        <img
          src={star}
          style={{ height: '10px', width: '10px', stroke: 'blue' }}
        />
      </div>
      <Question>
        <QuestionCore style={{ gridArea: 'question' }}>
          {decodeURIComponent(question.question)}
        </QuestionCore>
        {answers.map((answer, id) => (
          <AnswerButton
            id={id}
            disabled={
              !!answered &&
              answer !== question.correct_answer &&
              answer !== answered
            }
            onClick={() => setAnswered(answer)}
            answerColor={!!answered && getAnswerColor(answer)}
          >
            {decodeURIComponent(answer)}
          </AnswerButton>
        ))}
      </Question>
    </React.Fragment>
  )
}

export default QuestionComponent
