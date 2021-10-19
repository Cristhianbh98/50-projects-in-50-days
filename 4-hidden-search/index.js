document.querySelector('#btn-search').addEventListener('click', () => {
  document.querySelector('form').classList.toggle('show')
  document.querySelector('form input').focus()
})