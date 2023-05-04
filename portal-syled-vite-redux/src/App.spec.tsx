import { expect, test } from "vitest"
import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

/**
 * Test default values by rendering a context consumer without a
 * matching provider
 */

describe("App tests", () => {
    test('App shows default value', () => {
        render(<App />)
        expect(screen.getByText("Vite + React")).toHaveTextContent(
            'Vite + React',
        )
    })


    test('Should be able to render button count', () => {
        render(<App />)
        expect(screen.getByRole('button', { name: "count is 0" })).toBeInTheDocument()
    })

    test('Should be able to click on button count', async () => {
        render(<App />)
        fireEvent.click(screen.getByRole('button', { name: "count is 0" }))
        expect(screen.getByRole('button', { name: "count is 1" })).toBeInTheDocument()
    })
})
