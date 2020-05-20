import React from 'react'
import { Bar, Score, ScoreBar, ScoreStat } from './styles'

function ScoreComponent ({ score, totalAnswerd, total }) {
  return (
    <Score>
      <ScoreStat>
        <div>
          Score{' '}
          {totalAnswerd === 0 ? 0 : Math.floor((score / totalAnswerd) * 100)}%
        </div>
        <div>
          Max score{' '}
          {Math.floor(((score + (total - totalAnswerd)) / total) * 100)}%
        </div>
      </ScoreStat>
      <ScoreBar>
        <Bar
          data-testid={'bar'}
          ratio={score / total}
          style={{ zIndex: 4, backgroundColor: 'black' }}
        />
        <Bar
          data-testid={'bar'}
          ratio={score / totalAnswerd}
          style={{ zIndex: 3, backgroundColor: '#717171' }}
        />
        <Bar
          data-testid={'bar'}
          ratio={(score + (total - totalAnswerd)) / total}
          style={{ zIndex: 2, backgroundColor: '#D2D2D2' }}
        />
      </ScoreBar>
    </Score>
  )
}

export default ScoreComponent
