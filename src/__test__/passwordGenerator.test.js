import { describe, it, expect } from 'vitest'
import { passwordGenerator } from '../utils/passwordGenerator'

describe('password generator', () => {
  it('should return an string', () => {
    const res = passwordGenerator()
    expect(typeof res).toBe('string')
  })

  it('should have the same length of the first param', () => {
    expect(passwordGenerator(2)).toHaveLength(2)
    expect(passwordGenerator(3)).toHaveLength(3)
    expect(passwordGenerator(11)).toHaveLength(11)
  })

  it('should have the only lowercase character if it is true only', () => {
    const res = passwordGenerator(12, { lowercase: true })
    expect(res === res.toLowerCase()).toBe(true)
  })

  it('should have the only uppercase character if it is true only', () => {
    const res = passwordGenerator(12, { uppercase: true })
    expect(res === res.toUpperCase()).toBe(true)
  })

  // ...
})
