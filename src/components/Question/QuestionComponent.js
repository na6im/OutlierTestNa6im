import React, { useState, useEffect } from 'react'
import {
  Category,
  Question,
  QuestionCore,
  AnswerButton,
  Result
} from './styles'
import fullStar from '../../blackStar.png'
import star from '../../greyStar.png'

function QuestionComponent ({
  question,
  nextQuestionHandler,
  onAnswerHandler,
  end,
  onReset
}) {
  const [answers, setAnswers] = useState([])
  const [answered, setAnswered] = useState()

  const difficulty = {
    easy: 1,
    medium: 2,
    hard: 3
  }

  useEffect(() => {
    let answerOptions = JSON.parse(JSON.stringify(question.incorrect_answers))

    answerOptions.splice(
      Math.floor(Math.random() * Math.floor(4)),
      0,
      question.correct_answer
    )
    setAnswers(answerOptions)
    setAnswered()
  }, [question])

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

  function onAnswerButtonkHandler () {
    if (!end) {
      nextQuestionHandler()
    } else {
      onReset()
    }
  }
  return (
    <React.Fragment>
      <Category>{decodeURIComponent(question.category)}</Category>
      <div>
        {[...Array(3)].map((x, id) => (
          <img
            alt={'star'}
            key={id}
            src={id < difficulty[question.difficulty] ? fullStar : star}
          />
        ))}
      </div>
      <Question>
        <QuestionCore style={{ gridArea: 'question' }}>
          {decodeURIComponent(question.question)}
        </QuestionCore>
        {answers.map((answer, id) => (
          <AnswerButton
            key={id}
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
          {!end ? renderResult() : 'its the end'}
          <AnswerButton
            style={{
              width: 'fit-content',
              padding: '5px 1em',
              marginTop: '2em'
            }}
            onClick={onAnswerButtonkHandler}
          >
            {!end ? 'Next question' : 'Play again'}
          </AnswerButton>
        </Result>
      )}
    </React.Fragment>
  )
}

export default QuestionComponent
