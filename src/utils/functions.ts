// generate a number between 0 - max
export const getRandomInt = (max:number):number => {
    return Math.floor(Math.random() * max)
  }

export const getLengthOfObject = (obj:object):number => {
    return Object.keys(obj).length
  }

export const sortPassword = (password:string):string => {
    const passArray = password.split('')
    return shuffle(passArray).join('')
  }


const shuffle = (array) => {
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