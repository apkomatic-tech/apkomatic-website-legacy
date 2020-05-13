/* eslint-disable no-undef */
import { validateEmail } from '../utils'

test('validateEmail', () => {
  expect(validateEmail('me@example.com')).toBe(true)
  expect(validateEmail('me@example2.com')).toBe(true)
  expect(validateEmail('me@')).toBe(false)
  expect(validateEmail('')).toBe(false)
})
