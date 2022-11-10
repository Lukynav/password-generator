import { allowLetters } from "./allowLetters"
import { getRandomInt, getLengthOfObject, sortPassword } from "./functions"

// Allow letters
const {lowercaseLetters, uppercaseLetters, symbols, numbers} = allowLetters

// main function
export const passwordGenerator = (length, setting) => {
  
  // -- Is the data ok?
  if (!length || length <= 0) { throw new Error('The length param is required') }
  
  // -- All the data is OK!
  let password = null
  if (!setting) { password = useDefaultSetting(length) }
  if (setting) { password = useCustomSetting(length, setting) }

  // -- Is the length ok?
  if (password.length < length) {
    const dif = length - password.length
    password += addMissedChr(dif, setting)
  }

  // -- If is ok, I sort the caracters
  password = sortPassword(password)

  return password
}

// the default setting use only lowercase characters
const useDefaultSetting = (length) => {
  return fillWith(length, lowercaseLetters)
}

// crate an password with custom characters...
const useCustomSetting = (length, setting) => {
  let pass = ''
  const max = Math.floor(length / getLengthOfObject(setting))

  if (setting.lowercase) { pass += fillWith(max, lowercaseLetters) }
  if (setting.uppercase) { pass += fillWith(max, uppercaseLetters) }
  if (setting.number) { pass += fillWith(max, numbers) }
  if (setting.symbol) { pass += fillWith(max, symbols) }

  return pass
}

// create a string with the characters used...
const fillWith = (length, characters) => {
  let pass = ''
  for (let i = 0; i < length; i++) {
    const random = getRandomInt(characters.length)
    pass += characters[random]
  }
  return pass
}

const addMissedChr = (length, setting) => {
  const pass = ''
  if (setting.lowercase) { return fillWith(length, lowercaseLetters) }
  if (setting.uppercase) { return fillWith(length, uppercaseLetters) }
  if (setting.number) { return fillWith(length, numbers) }
  if (setting.symbol) { return fillWith(length, symbols) }
}
