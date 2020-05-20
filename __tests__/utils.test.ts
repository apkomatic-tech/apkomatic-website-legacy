/* eslint-disable no-undef */
import { validateEmail, validateName } from '../utils'

test('validateEmail', () => {
  expect(validateEmail('me@example.com')).toBe(true)
  expect(validateEmail('me@example2.com')).toBe(true)
  expect(validateEmail('me@')).toBe(false)
  expect(validateEmail('')).toBe(false)
})

test('validateName', () => {
  expect(validateName('hello')).toBe(true)
  expect(validateName('john doe')).toBe(true)
  expect(validateName('')).toBe(false)
  expect(validateName('john doe1')).toBe(false)
})
