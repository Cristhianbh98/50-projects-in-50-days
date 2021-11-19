const resultEl = document.getElementById('result')
const lengthtEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const getRandomNumber = (min, max) => Math.floor( (Math.random() * ((max + 1) - min) ) + min )

const getRandomLower = () => String.fromCharCode(getRandomNumber(97, 122))

const getRandomUpper = () => String.fromCharCode(getRandomNumber(65, 90))

const getRandomSymbol = () => {
  const symbols = '!@#$%^&*(){}[]=<>/,.'
  return symbols[getRandomNumber(0, symbols.length - 1)]
}

const randomIndex = {
  hasLower : getRandomLower,
  hasUpper: getRandomUpper,
  hasNumbers: () => getRandomNumber(0, 9),
  hasSymbols: getRandomSymbol
}

function generatePassword(config) {
  const { length, hasUpper, hasLower, hasNumbers, hasSymbols } = config

  let generatedPassword = ''

  const typesCount = hasUpper + hasLower + hasNumbers + hasSymbols
  
  const types = [{hasUpper}, {hasLower}, {hasNumbers}, {hasSymbols}].filter(item => Object.values(item)[0])
  
  if (typesCount === 0) return ''

  for (let i = 0; i < length; i += typesCount) {
    types.forEach(type => {
      const funcName = Object.keys(type)[0]
      generatedPassword += randomIndex[funcName]()
    })
  }

  return generatedPassword.slice(0, length)
}

// Events
generateEl.addEventListener('click', () => {
  const config = {
    length : parseInt(lengthtEl.value),
    hasUpper: uppercaseEl.checked,
    hasLower: lowercaseEl.checked,
    hasNumbers: numbersEl.checked,
    hasSymbols: symbolsEl.checked
  }

  resultEl.innerText = generatePassword(config)
})

clipboardEl.addEventListener('click', async () => {
  const password = resultEl.innerText

  if ( !password ) return null

  try {
    await navigator.clipboard.writeText(password)
    alert('Password copied to clipboard')
  } catch (error) {
    console.error('Failed to copy!', error)
  }
})
