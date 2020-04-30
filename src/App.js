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
  const [score, setScore] = useState(0)

  function onAnswer (correct) {
    if (correct) setScore(score + 1)
  }
  function onNextQuestion () {
    setIndex(index + 1)
  }

  return (
    <Container>
      <QuestionLayout>
        <ProgressBar ratio={0.5} />
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
              <div>Score {score}%</div>
              <div>Max score 75%</div>
            </ScoreStat>
            <ScoreBar />
          </Score>
        </Body>
      </QuestionLayout>
    </Container>
  )
}

export default App
