/**
 * passwordGenerator( length, settings )
 * settings is an object
 * settings: {
 *  lowercase: boolean
 *  uppercase: boolean
 *  number: boolean
 *  symbol: boolean
 * }
*/

import { describe, it, expect } from 'vitest'
import { passwordGenerator } from '../utils/passwordGenerator'

describe('password generator', () => {
  // result
  it('should return an string', () => {
    const res = passwordGenerator()
    expect(typeof res).toBe('string')
  })

  // length
  it('the length param is required, should throw an error if it is empty', () => {
    expect(passwordGenerator()).toThrowError()
  })
  it('the result should have the same length of the first param', () => {
    expect(passwordGenerator(2)).toHaveLength(2)
    expect(passwordGenerator(3)).toHaveLength(3)
    expect(passwordGenerator(11)).toHaveLength(11)
  })

  // settings object
  it('if settings object is empty, should return a password with only lowercases', () => {
    const res = passwordGenerator(6)
    expect(res === res.toLowerCase()).toBe(true)
  })
  it('if only lowercase is true, the password should to have only lowercase characters', () => {
    const res = passwordGenerator(6, { lowercase: true })
    expect(res === res.toLowerCase()).toBe(true)
  })
  it('if only uppercase is true, the password should to have only uppercase characters', () => {
    const res = passwordGenerator(8, { uppercase: true })
    expect(res === res.toUpperCase()).toBe(true)
  })
  it('if only number is true, the password should to have only number characters', () => {
    const res = passwordGenerator(8, { number: true })
    const regex = /[0-9]{8}/
    expect(res.match(regex)[0]).toHaveLength(8)
  })
  it('if only symbol is true, the password should to have only symbol characters', () => {
    const res = passwordGenerator(8, { symbol: true })
    const regex = /[!@#$%&*_-]{8}/
    expect(res.match(regex)[0]).toHaveLength(8)
  })
})
