const lowercaseChr = 'qwertyuiopasdfghjklzxcvbnm'
const uppercaseChr = 'QWERTYUIOPASDFGHJKLZXCVBNM'
const numbers = '0123456789'
const symbols = '!@#$%&*_-'

export const passwordGenerator = (length, setting) => {
  if (!length || length <= 0) { throw new Error('The length param is required') }
  let password = null

  if (!setting) { password = useDefaultSetting(length) }
  if (setting) { password = useCustomSetting(length, setting) }

  password = sortPassword(password)

  console.log(password)
  return password
}

// the default setting use only lowercase characters
const useDefaultSetting = (length) => {
  return fillWith(length, lowercaseChr)
}

// crate an password with custom characters
const useCustomSetting = (length, setting) => {
  let pass = ''
  const max = length / getLengthOfObject(setting)

  if (setting.lowercase) { pass += fillWith(max, lowercaseChr) }
  if (setting.uppercase) { pass += fillWith(max, uppercaseChr) }
  if (setting.number) { pass += fillWith(max, numbers) }
  if (setting.symbol) { pass += fillWith(max, symbols) }

  return pass
}

// create an array with custom characters
const fillWith = (length, characters) => {
  let pass = ''
  for (let i = 0; i < length; i++) {
    const random = getRandomInt(characters.length)
    pass += characters[random]
  }
  return pass
}

// generate a number between 0 - max
const getRandomInt = (max) => {
  return Math.floor(Math.random() * max)
}

const getLengthOfObject = (obj) => {
  return Object.keys(obj).length
}

const sortPassword = (password) => {
  const passArray = password.split('')
  return shuffle(passArray).join('')
}

function shuffle (array) {
  let currentIndex = array.length; let temporaryValue; let randomIndex

  for (let i = 0; i < 25; i++) {
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1
      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }
  }

  return array
}
