const contents = document.querySelectorAll('.content')
const items = document.querySelectorAll('nav ul li')

items.forEach((item, index) => {
  item.addEventListener('click', () => {
    hideAllContents()
    hideAllItems()

    item.classList.add('active')
    contents[index].classList.add('show')
  })
})

function hideAllContents() {
  contents.forEach(content => content.classList.remove('show'))
}

function hideAllItems() {
  items.forEach(item => item.classList.remove('active'))
}
