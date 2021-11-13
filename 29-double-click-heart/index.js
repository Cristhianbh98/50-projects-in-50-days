class Heart {
  constructor() {
    this.count = 0
    this.clickTime = 0
    this.img = document.querySelector('#img')
    this.countEl = document.querySelector('#count')
    this.events()
  }

  events() {
    this.img.addEventListener('click', (e) => this.clickHandler(e))
  }

  clickHandler(e) {
    if (this.clickTime === 0) {
      this.clickTime = new Date().getTime()
    } else {
      if (new Date().getTime() - this.clickTime < 800) {

        if (e.target.tagName === 'DIV') {
          this.count++
          this.countEl.textContent = this.count
          this.addHeart(e)    
        }
        this.clickTime = 0
      } else {
        this.clickTime = new Date().getTime()
      }
    }

  }

  addHeart(e) {
    const x = e.offsetX
    const y = e.offsetY
    
    const heartEl = document.createElement('SPAN')
    heartEl.classList.add('heart')
    heartEl.style.top = y + 'px'
    heartEl.style.left = x + 'px'
    heartEl.innerHTML = '<i class="fas fa-heart"></i>'

    this.img.appendChild(heartEl)

    setTimeout(() => heartEl.remove(), 1000)
  }
}

const heart = new Heart()
