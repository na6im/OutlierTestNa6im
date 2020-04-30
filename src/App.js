import React from 'react'
import { Container, Question, ProgressBar } from './styles'

function App () {
  return (
    <Container>
      <Question>
        <ProgressBar ratio={0.5} />
      </Question>
    </Container>
  )
}

export default App
