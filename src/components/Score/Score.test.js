import { render } from '@testing-library/react'
import Score from './ScoreComponent'
import React from 'react'
import ScoreComponent from './ScoreComponent'

test('renders corectly', () => {
  const { getAllByTestId, getByText } = render(
    <Score score={1} total={20} totalAnswerd={2} />
  )

  expect(getAllByTestId('bar').length).toBe(3)
  expect(getByText('Score 50%').length)
  expect(getByText('Max score 95%').length)
})
