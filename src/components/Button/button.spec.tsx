import { describe, expect, test, beforeAll } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button } from './index'

describe('Buttons', () => {

  beforeAll(() => {
    render(<Button isInfo={false}>Reproducir</Button>)
    render(<Button isInfo={true}>más información</Button>)
  })

  test('should exist button element with \'reproducir\' text', () => {
    expect(screen.getByText(/reproducir/i)).toBeDefined()
  })
  test('should exist button element with \'reproducir\' text', () => {
    expect(screen.getByText(/más información/i)).toBeDefined()
  })
  
})

