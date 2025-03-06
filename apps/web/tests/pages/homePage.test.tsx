import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../../app/page'

describe('pageSection', () => {
  it('renders a pageSection', () => {
    render(<Page />)

    const page = screen.getByText('Dribbble')

    expect(page).toBeInTheDocument()
  })
})
