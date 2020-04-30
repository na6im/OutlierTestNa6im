import styled from 'styled-components'

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
    '1 2'
    '3 4';
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
