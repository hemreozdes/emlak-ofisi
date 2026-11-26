import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import App from './App'

// S0-1 duman testi (smoke test): test altyapısının uçtan uca çalıştığını kanıtlar.
// Şablon bileşenin metnine bağlı değil; App, S0-7'de değişince bu test bozulmaz.
describe('App', () => {
  it('S0-1: kök bileşen hatasız render edilir', () => {
    const { container } = render(<App />)
    expect(container).not.toBeEmptyDOMElement() // ekrana en az bir öğe çizildi
  })
})