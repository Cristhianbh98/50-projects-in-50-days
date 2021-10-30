const $faq = document.querySelector('.faq-container')

$faq.addEventListener('click', handleClick)

function handleClick(e) {
  const el = e.target
  if (el.tagName === 'BUTTON' || el.tagName === 'I') handleToggle(el)
}

function handleToggle(el) {
  const button = findNearlestButton(el)
  const isActive = button.getAttribute('data-active')

  if (isActive === 'true') {
    contractFaq(button)
  } else {
    expandFaq(button)
  }
}

function expandFaq(button) {
  button.setAttribute('data-active', 'true')
  const faq = findNearlestFaq(button)
  faq.classList.add('active')
}

function contractFaq(button) {
  button.setAttribute('data-active', 'false')
  const faq = findNearlestFaq(button)
  faq.classList.remove('active')
}

function findNearlestButton(el) {
  while (el.tagName !== 'BUTTON') {
    el = el.parentElement
  }

  return el
}

function findNearlestFaq(el) {
  while (!el.classList.contains('faq')) {
    el = el.parentElement
  }

  return el
}
