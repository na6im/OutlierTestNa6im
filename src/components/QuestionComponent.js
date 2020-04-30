import React, { useState, useEffect } from 'react'
import {
  Title,
  Category,
  Question,
  QuestionCore,
  AnswerButton,
  Result
} from './styles'
import star from '../blackStar.png'

function QuestionComponent ({
  question,
  nextQuestionHandler,
  onAnswerHandler
}) {
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
    setAnswered()
  }, [question])
  {
    //TODO stars
  }

  function getAnswerColor (answer) {
    if (answer === question.correct_answer) return 'black'
    if (answer === answered) return 'white'
  }

  function renderResult () {
    return answered === question.correct_answer ? 'Correct' : 'Sorry!'
  }

  function onClickHandler (answer) {
    if (!answered) {
      setAnswered(answer)
      onAnswerHandler(answer === question.correct_answer)
    }
  }

  return (
    <React.Fragment>
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
            onClick={() => {
              onClickHandler(answer)
            }}
            answerColor={!!answered && getAnswerColor(answer)}
          >
            {decodeURIComponent(answer)}
          </AnswerButton>
        ))}
      </Question>
      {!!answered && (
        <Result>
          {renderResult()}
          <AnswerButton
            style={{
              width: 'fit-content',
              padding: '5px 1em',
              marginTop: '2em'
            }}
            onClick={() => nextQuestionHandler()}
          >
            Next question
          </AnswerButton>
        </Result>
      )}
    </React.Fragment>
  )
}

export default QuestionComponent
