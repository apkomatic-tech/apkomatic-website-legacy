import React from 'react'
import { render } from '@testing-library/react'
import Splash from '../components/Splash'

describe('Splash Component Test', () => {
  test('component renders', () => {
    const { container } = render(<Splash title='test' />)
    expect(container).not.toBe(null)
  })
  test('splash title', () => {
    const { queryByText } = render(<Splash title='Test' />)
    const titleElement = queryByText(/test/i)
    expect(titleElement.textContent).toBe('Test')
  })

  test('splash text', () => {
    const { queryByTestId } = render(<Splash title='test' text='hello test' />)
    const text = queryByTestId('splash-text')
    expect(text.textContent).toMatch(/hello test/i)
  })
})
