const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlidesIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

function changeSlide(direction) {
  const sliderHeight = sliderContainer.clientHeight
  if (direction === 'up') {
    activeSlidesIndex++

    if (activeSlidesIndex > slidesLength - 1) activeSlidesIndex = 0
  } else {
    activeSlidesIndex--
    if (activeSlidesIndex < 0) activeSlidesIndex = slidesLength - 1
  }

  slideRight.style.transform = `translateY(-${activeSlidesIndex * sliderHeight}px)`;

  slideLeft.style.transform = `translateY(${activeSlidesIndex * sliderHeight}px)`;
}
