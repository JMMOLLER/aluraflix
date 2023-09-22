import { describe, expect, test, beforeAll } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from './index'

describe('Header', () => {

  beforeAll(() => {
    render(<Header categories={[
      "Agregados recientemente",
      "Películas",
      "Series",
      "Animes"
    ]} />)
  })

  test('should exist \'inicio\' link element', () => {
    expect(screen.getByText(/inicio/i)).toBeDefined()
  })
  test('should exist \'Series\' link element', () => {
    expect(screen.getByText(/series/i)).toBeDefined()
  })
  test('should exist \'películas\' link element', () => {
    expect(screen.getByText(/Películas/i)).toBeDefined()
  })
  test('should exist \'Animes\' link element', () => {
    expect(screen.getByText(/animes/i)).toBeDefined()
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

