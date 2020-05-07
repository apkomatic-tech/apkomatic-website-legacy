import React from 'react'
import { render, queryByAttribute } from '@testing-library/react'

import ServiceOption from '../components/servicePage/ServiceOption'

describe('Service Page tests', () => {
  test('Should render Service Option component', () => {
    const { container, queryByText } = render(
      <ServiceOption
        id={1}
        title="Test Title"
        copy="Test Copy"
        features={['feat1', 'feat2', 'feat3']}
      />
    )

    expect(container).toBeDefined()
    expect(queryByText(/test title/i).textContent).toBe('Test Title')
    expect(queryByText(/test copy/i).textContent).toBe('Test Copy')
    expect(queryByText(/contact/i).getAttribute('href')).toMatch(
      /contact\/?$/gi
    )
  })
})
