const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)]

class Hoverboard {
  constructor (id, amount = 500) {
    this.hoverboardEl = document.getElementById(id)
    this.amountSquares = amount
    this.events()
  }

  // Events
  events() {
    this.hoverboardEl.addEventListener('mouseover', (e) => this.handleMouseOver(e.target))
    this.hoverboardEl.addEventListener('mouseout', (e) => this.handleMouseOut(e.target))
  }

  // Methods
  handleMouseOver(el) {
    if (el.classList.contains('square')) this.setColor(el)
  }

  handleMouseOut(el) {
    if (el.classList.contains('square')) this.removeColor(el) 
  }

  setColor(el) {
    const color = getRandomColor()
    el.style.background = color
    el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
  }

  removeColor(el) {
    el.style.background = '#1d1d1d'
    el.style.boxShadow = '0 0 2px #000'
  }

  build() {
    for (let i = 0; i < this.amountSquares; i++) {
      const square = document.createElement('div')
      square.classList.add('square')

      this.hoverboardEl.appendChild(square)
    }
  }
}

const hoverboard = new Hoverboard('hoverboard');
hoverboard.build()
