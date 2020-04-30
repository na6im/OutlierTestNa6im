import React, { useState } from 'react'
import {
  Container,
  QuestionLayout,
  ProgressBar,
  Body,
  Score,
  ScoreStat,
  ScoreBar,
  Bar
} from './styles'
import Questions from './questions.json'
import QuestionComponent from './components/QuestionComponent'
import { Title } from './components/styles'

function App () {
  const [index, setIndex] = useState(0)
  const [totalAnswerd, setTotalAnswerd] = useState(0)
  const [score, setScore] = useState(0)

  function onAnswer (correct) {
    if (correct) {
      setScore(score + 1)
    }
    setTotalAnswerd(totalAnswerd + 1)
  }
  function onNextQuestion () {
    setIndex(index + 1)
  }
  let remainingQuestions = Questions.length - totalAnswerd
  console.log(remainingQuestions)
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
              <div>Score {(score / totalAnswerd) * 100}%</div>
              <div>
                Max score{' '}
                {((score + (Questions.length - totalAnswerd)) /
                  Questions.length) *
                  100}
                %
              </div>
            </ScoreStat>
            <ScoreBar>
              <Bar
                ratio={score / Questions.length}
                style={{ zIndex: 4, backgroundColor: 'black' }}
              />
              <Bar
                ratio={score / totalAnswerd}
                style={{ zIndex: 3, backgroundColor: '#717171' }}
              />
              <Bar
                ratio={(score + remainingQuestions) / Questions.length}
                style={{ zIndex: 2, backgroundColor: '#D2D2D2' }}
              />
            </ScoreBar>
          </Score>
        </Body>
      </QuestionLayout>
    </Container>
  )
}

export default App
