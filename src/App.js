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

function App () {
  const [index, setIndex] = useState(0)
  return (
    <Container>
      <QuestionLayout>
        <ProgressBar ratio={0.5} />
        <Body>
          <QuestionComponent question={Questions[0]} />
          <Score>
            <ScoreStat>
              <div>Score 60%</div>
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
