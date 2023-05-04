import { expect, test } from "vitest"
import { render, screen } from '@testing-library/react'
import App from './App'

/**
 * Test default values by rendering a context consumer without a
 * matching provider
 */
test('App shows default value', () => {
    render(<App />)
    expect(screen.getByText("Vite + React")).toHaveTextContent(
        'Vite + React',
    )
})
