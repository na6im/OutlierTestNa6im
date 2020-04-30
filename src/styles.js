import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #1c1c1c;
  justify-content: center;
  align-items: center;
`

export const Question = styled.div`
  height: 90%;
  width: 40%;
  background-color: white;
  border: 8px solid #ededed;
`

export const ProgressBar = styled.div`
  align-self: flex-start;
  height: 0.8em;
  width: ${props => props.ratio * 100}%;
  background-color: #a9aaa9;
`
