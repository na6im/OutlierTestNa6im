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

export const Score = styled.div`
  display: flex;
  flex-direction: column;
  height: 3em;
  width: 100%;
  border-radius: 5px;
  margin-top: auto;
`

export const ScoreStat = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`
export const ScoreBar = styled.div`
  position: relative;
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
  border: solid 1px black;
`

export const Bar = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  width: ${props => props.ratio * 100}%;
  background-color: black;
`
