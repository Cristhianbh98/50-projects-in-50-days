const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)

const $body = $('body')
const $slides = $$('.slide')
const $btnLeft = $('#left')
const $btnRight = $('#right')

let activeSlide = 0

$btnRight.addEventListener('click', () => {
  activeSlide++

  if (activeSlide > $slides.length -1) activeSlide = 0

  setBgToBody()
  setActiveSlide()
})

$btnLeft.addEventListener('click', () => {
  activeSlide--

  if (activeSlide < 0) activeSlide = $slides.length - 1

  setBgToBody()
  setActiveSlide()
})

setBgToBody()

function setBgToBody() {
  $body.style.backgroundImage = $slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
  $slides.forEach(slide => slide.classList.remove('active'))

  $slides[activeSlide].classList.add('active')
}
