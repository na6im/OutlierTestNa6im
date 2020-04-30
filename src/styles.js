import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #1c1c1c;
  justify-content: center;
  align-items: center;
`

export const QuestionLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 40%;
  background-color: white;
  border: 8px solid #ededed;
`

export const ProgressBar = styled.div`
  height: 2%;
  width: ${props => props.ratio * 100}%;
  background-color: #a9aaa9;
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 3em 5em 1em 5em;
`

export const Title = styled.div`
  font-size: 32px;
  font-weight: bolder;
  color: #4a4a52;
`

export const Category = styled.div`
  font-size: 14px;
  color: #b1acb2;
`

export const Question = styled.div`
  display: grid;
  margin-top: 3em;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    'question question'
    'answera answerb'
    'answerc answerd';
  grid-column-gap: 2em;
  grid-row-gap: 2em;
`

export const QuestionCore = styled.div`
  grid-area: 'question';
  font-weight: 700;
  font-size: 18px;
`

export const AnswerButton = styled.div`
  grid-area: 'question';
  background-color: #e5e6e5;
  border-radius: 5px;
  font-weight: 500;
  font-size: 16px;
  height: fit-content;
  border: 1px solid black;
  padding: 5px;
  text-align: center;
`

export const Score = styled.div`
  display: flex;
  flex-direction: column;
  height: 4em;
  width: 100%;
  border-radius: 5px;
  margin-top: auto;
`

export const ScoreStat = styled.div`
  display: flex;
  justify-content: space-between;
`
export const ScoreBar = styled.div`
  height: 100%;
  border-radius: 5px;
  border: solid 1px black;
`
