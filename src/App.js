import React, { useState } from 'react'
import {
  Container,
  QuestionLayout,
  ProgressBar,
  Body,
  Score,
  ScoreStat,
  ScoreBar,
  Bar,
  Title
} from './styles'
import Questions from './questions.json'
import QuestionComponent from './components/Question/QuestionComponent'
import ScoreComponent from './components/Score/ScoreComponent'

function App () {
  const [index, setIndex] = useState(0)
  const [totalAnswerd, setTotalAnswerd] = useState(0)
  const [score, setScore] = useState(0)

  const total = Questions.length

  function onAnswer (correct) {
    if (correct) {
      setScore(score + 1)
    }
    setTotalAnswerd(totalAnswerd + 1)
  }
  function onNextQuestion () {
    if (index !== total - 1) setIndex(index + 1)
  }
  return (
    <Container>
      <QuestionLayout>
        <ProgressBar ratio={(index + 1) / total} />
        <Body>
          <Title>
            Question {index + 1} of {total}
          </Title>
          <QuestionComponent
            end={index === total - 1}
            index={index}
            question={Questions[index]}
            onAnswerHandler={onAnswer}
            nextQuestionHandler={onNextQuestion}
          />
          <ScoreComponent
            score={score}
            total={total}
            totalAnswerd={totalAnswerd}
          />
        </Body>
      </QuestionLayout>
    </Container>
  )
}

export default App
