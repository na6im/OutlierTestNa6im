import styled, { css } from 'styled-components'

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
