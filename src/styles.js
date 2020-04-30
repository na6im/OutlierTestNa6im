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
