document.querySelector('.container').addEventListener('click', clickHandler)

function clickHandler(e) {
  const el = e.target;
  
  if (el.classList.contains('card') && !el.classList.contains('focus')) focusCard(el)
}

function focusCard(card) {
  document.querySelector('.container .card.focus').classList.remove('focus')
  card.classList.add('focus')
}
