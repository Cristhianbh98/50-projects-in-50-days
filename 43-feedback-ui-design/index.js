const ratingsContainer = document.querySelector('.ratings-container')
const send = document.querySelector('#send')
const panel = document.querySelector('#panel')

let selectedRating = 'Satisfied'

ratingsContainer.addEventListener('click', e => {
  const el = e.target

  if (el.parentNode.classList.contains('rating')) {
    removeActive()
    el.parentNode.classList.add('active')
    const selected = el.nextElementSibling ?? el
    selectedRating = selected.innerHTML
  }

  if (el.classList.contains('rating')) {
    removeActive()
    el.classList.add('active')
    selectedRating = el.querySelector('small').innerHTML
  }
})

function removeActive() {
  ratingsContainer.querySelector('.rating.active').classList.remove('active')
}

send.addEventListener('click', e => {
  panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank you!</strong>
    <br/>
    <strong>${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support</p>
  `
})
