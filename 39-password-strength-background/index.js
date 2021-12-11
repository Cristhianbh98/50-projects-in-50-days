const initialBlur = 20

const blur = (el, blur) => el.style.filter = `blur(${blur}px)`
const inputHandle = e => {
  const inputLength = e.target.value.length
  blur(background, initialBlur - inputLength)
}

const password = document.getElementById('password')
const background = document.getElementById('background')

blur(background, initialBlur)

password.addEventListener('input', inputHandle)
