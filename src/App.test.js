import { fireEvent, render } from '@testing-library/react'
import App from './App'
import React from 'react'
import Questions from './questions.json'
import '@testing-library/jest-dom/extend-expect'

describe('<App />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error')
    render(<App />)
    expect(spy).not.toHaveBeenCalled()
  })

  it('Expect renders corectly', () => {
    const { getByText, getByTestId, getAllByTestId, getAllByAltText } = render(
      <App />
    )
    expect(getByTestId('Progress')).toBeInTheDocument()
    expect(getByText('Question 1 of 20')).toBeInTheDocument()
    expect(getAllByAltText('star').length).toBe(3)
    expect(getAllByTestId('answer').length).toBe(4)

    expect(getByText('Score 0%')).toBeInTheDocument()
    expect(getByText('Max score 100%')).toBeInTheDocument()
  })

  it('Expect to update score and show next question', () => {
    const { getByText } = render(<App />)

    const question = Questions[0]
    let correct = getByText(decodeURIComponent(question.correct_answer))
    fireEvent.click(correct)

    expect(getByText('Score 100%')).toBeInTheDocument()
    fireEvent.click(getByText('Next question'))

    let nextQuestion = getByText(decodeURIComponent(Questions[1].question))

    expect(nextQuestion).toBeInTheDocument()
  })

  it('Expect to update max score and show next question on incorrect update', () => {
    const { getByText } = render(<App />)

    const question = Questions[0]
    let incorrect = getByText(decodeURIComponent(question.incorrect_answers[0]))
    fireEvent.click(incorrect)

    expect(getByText('Score 0%')).toBeInTheDocument()
    expect(getByText('Max score 95%')).toBeInTheDocument()
    fireEvent.click(getByText('Next question'))

    let nextQuestion = getByText(decodeURIComponent(Questions[1].question))

    expect(nextQuestion).toBeInTheDocument()
  })

  it('Expect render end ', () => {
    const { getByText } = render(<App />)

    for (let i = 0; i < Questions.length - 1; i++) {
      let correct = getByText(decodeURIComponent(Questions[i].correct_answer))
      fireEvent.click(correct)
      fireEvent.click(getByText('Next question'))
    }
    let correct = getByText(decodeURIComponent(Questions[19].correct_answer))
    fireEvent.click(correct)
    expect(getByText('its the end')).toBeInTheDocument()

    expect(getByText('Score 100%')).toBeInTheDocument()
    expect(getByText('Max score 100%')).toBeInTheDocument()

    fireEvent.click(getByText('Play again'))

    expect(getByText('Score 0%')).toBeInTheDocument()
    expect(getByText('Max score 100%')).toBeInTheDocument()
  })

  /**
   * Unskip this test to use it
   *
   * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
   */
})
