/* eslint-disable import/prefer-default-export */
const encode = (data: { [x: string]: string | number | boolean }) =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')

const validateEmail = (value: string) => {
  const regexPattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  return regexPattern.test(value)
}

export { encode, validateEmail }
