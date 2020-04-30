import React, { useState } from 'react'
import {
  Container,
  QuestionLayout,
  ProgressBar,
  Body,
  Score,
  ScoreStat,
  ScoreBar
} from './styles'
import Questions from './questions.json'
import QuestionComponent from './components/QuestionComponent'
import { Title } from './components/styles'

function App () {
  const [index, setIndex] = useState(0)
  const [totalAnswerd, setTotalAnswerd] = useState(0)
  const [score, setScore] = useState(0)

  function onAnswer (correct) {
    if (correct) setScore(score + 1)
    setTotalAnswerd(totalAnswerd + 1)
  }
  function onNextQuestion () {
    setIndex(index + 1)
  }
  console.log(Questions.length - index)
  return (
    <Container>
      <QuestionLayout>
        <ProgressBar ratio={(index + 1) / Questions.length} />
        <Body>
          <Title>
            Question {index + 1} of {Questions.length}
          </Title>
          <QuestionComponent
            index={index}
            question={Questions[index]}
            onAnswerHandler={onAnswer}
            nextQuestionHandler={onNextQuestion}
          />
          <Score>
            <ScoreStat>
              <div>Score {(score / Questions.length) * 100}%</div>
              <div>
                Max score{' '}
                {((score + (Questions.length - index)) / Questions.length) *
                  100}
                %
              </div>
            </ScoreStat>
            <ScoreBar />
          </Score>
        </Body>
      </QuestionLayout>
    </Container>
  )
}

export default App
