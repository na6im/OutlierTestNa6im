import React from 'react'
import {
  Container,
  QuestionLayout,
  ProgressBar,
  Body,
  Title,
  Category,
  Question,
  QuestionCore,
  AnswerButton,
  Score,
  ScoreStat,
  ScoreBar
} from './styles'

function App () {
  return (
    <Container>
      <QuestionLayout>
        <ProgressBar ratio={0.5} />
        <Body>
          <Title>Question 16 of 20</Title>
          <Category>Entertaiment: Board Games</Category>
          <Question>
            <QuestionCore style={{ gridArea: 'question' }}>
              Question testQuestion testQuestion testQuestion testQuestion
              testQuestion testQuestion testQuestion test
            </QuestionCore>
            <AnswerButton style={{ gridArea: 'answera' }}>
              Question test
            </AnswerButton>
          </Question>

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
