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
    const res = passwordGenerator(2)
    expect(typeof res).toBe('string')
  })

  // length
  it('the length param is required, should throw an error if it is empty', () => {
    expect(() => { passwordGenerator() }).toThrowError()
  })
  it('should throw an error if length is 0', () => {
    expect(() => { passwordGenerator(0) }).toThrowError()
  })
  it('the result should have the same length of the first param', () => {
    expect(passwordGenerator(2)).toHaveLength(2)
    expect(passwordGenerator(3)).toHaveLength(3)
    expect(passwordGenerator(11, { lowercase: true, uppercase: true })).toHaveLength(11)
  })

  // settings object
  it('if settings object is empty, should return a password with only lowercases', () => {
    const res1 = passwordGenerator(12)
    const res2 = passwordGenerator(16)
    const res3 = passwordGenerator(20)
    expect(res1 === res1.toLowerCase()).toBe(true)
    expect(res2 === res2.toLowerCase()).toBe(true)
    expect(res3 === res3.toLowerCase()).toBe(true)
  })
  it('if only lowercase is true, the password should to have only lowercase characters', () => {
    const res = passwordGenerator(8, { lowercase: true })
    const regex = /[a-z]{8}/
    expect(res.match(regex)[0]).toHaveLength(8)
  })
  it('if only uppercase is true, the password should to have only uppercase characters', () => {
    const res = passwordGenerator(8, { uppercase: true })
    const regex = /[A-Z]{8}/
    expect(res.match(regex)[0]).toHaveLength(8)
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

  // uses cases
  it('uses cases #1', () => {
    const res = passwordGenerator(12, { lowercase: true, uppercase: true })
    const regex = /[a-z][A-Z]/
    expect(res.match(regex)[0]).toHaveLength(2)
  })
  it('uses cases #2', () => {
    const res = passwordGenerator(17, { lowercase: true, number: true })
    const regex = /[a-z][0-9]/
    expect(res.match(regex)[0]).toHaveLength(2)
  })
  it('uses cases #3', () => {
    const res = passwordGenerator(21, { uppercase: true, number: true })
    const regex = /[A-Z][0-9]/
    expect(res.match(regex)[0]).toHaveLength(2)
  })
  it('uses cases #4', () => {
    const res = passwordGenerator(12, { symbol: true, number: true })
    const regex = /[0-9][!@#$%&*_-]/
    expect(res.match(regex)[0]).toHaveLength(2)
  })
})
