import styled, { css } from 'styled-components'

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

export const AnswerButton = styled.button`
  grid-area: 'question';
  background-color: #e5e6e5;
  border-radius: 5px;
  font-weight: 500;
  font-size: 16px;
  height: fit-content;
  padding: 5px;
  text-align: center;
  outline: none;
  ${props =>
    props.answerColor === 'white' &&
    css`
      background-color: white;
      color: black;
    `}

  ${props =>
    props.answerColor === 'black' &&
    css`
      background-color: black;
      color: white;
    `}
`
export const Result = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  align-items: center;
`
