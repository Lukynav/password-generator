export const passwordGenerator = (length, params) => {
  let password = ''
  const allowCharacters = setAllowCharacters(params)

  for (let i = 0; i < length; i++) {
    const random = Math.floor(Math.random() * allowCharacters.length)
    password += allowCharacters[random]
  }

  return password
}

const characters = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '0123456789'
const symbol = '!@#$%&*_-'

const setAllowCharacters = (params) => {
  let allowCharacters = ''
  // --
  if (params) {
    if (params.lowercase) {
      allowCharacters += characters
    }

    if (params.uppercase) {
      allowCharacters += characters.toUpperCase()
    }
    if (params.number) {
      allowCharacters += numbers
    }
    if (params.symbol) {
      allowCharacters += symbol
    }
  }

  // --
  if (allowCharacters.length === 0) {
    allowCharacters = characters
  }

  return allowCharacters
}
