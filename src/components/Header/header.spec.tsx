import { describe, expect, test, beforeAll } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Header from './index'

describe('Header', () => {

  beforeAll(() => {
    render(<Header />)
  })

  test('should exist \'inicio\' link element', () => {
    expect(screen.getByText(/inicio/i)).toBeDefined()
  })
  test('should exist \'séries\' link element', () => {
    expect(screen.getByText(/séries/i)).toBeDefined()
  })
  test('should exist \'películas\' link element', () => {
    expect(screen.getByText(/películas/i)).toBeDefined()
  })
  test('should exist \'novedades populares\' link element', () => {
    expect(screen.getByText(/novedades populares/i)).toBeDefined()
  })
  test('should exist \'logo\' img element', () => {
    expect(screen.getByAltText(/logo/i)).toBeDefined()
  })
  test('should exist \'search\' img element', () => {
    expect(screen.getByAltText(/search/i)).toBeDefined()
  })
  test('should exist \'bell\' img element', () => {
    expect(screen.getByAltText(/bell/i)).toBeDefined()
  })
  test('should exist \'user\' img element', () => {
    expect(screen.getByAltText(/user/i)).toBeDefined()
  })
  
})

