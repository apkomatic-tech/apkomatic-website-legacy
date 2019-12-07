/* eslint-disable no-undef */
const validateEmail = value => {
  const regexPattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  return regexPattern.test(value)
}

test('validateEmail', () => {
  expect(validateEmail('me@example.com')).toBe(true)
  expect(validateEmail('me@example2.com')).toBe(true)
  expect(validateEmail('me@')).toBe(false)
  expect(validateEmail(null)).toBe(false)
  expect(validateEmail('')).toBe(false)
  expect(validateEmail(1)).toBe(false)
  expect(validateEmail([])).toBe(false)
  expect(validateEmail({})).toBe(false)
})
