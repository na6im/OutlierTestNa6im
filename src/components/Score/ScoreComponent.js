import React, { useState, useEffect } from 'react'
import { Bar, Score, ScoreBar, ScoreStat } from './styles'

function ScoreComponent ({ score, totalAnswerd, total }) {
  console.log()
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
          ratio={score / total}
          style={{ zIndex: 4, backgroundColor: 'black' }}
        />
        <Bar
          ratio={score / totalAnswerd}
          style={{ zIndex: 3, backgroundColor: '#717171' }}
        />
        <Bar
          ratio={(score + (total - totalAnswerd)) / total}
          style={{ zIndex: 2, backgroundColor: '#D2D2D2' }}
        />
      </ScoreBar>
    </Score>
  )
}

export default ScoreComponent
