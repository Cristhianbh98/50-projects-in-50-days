const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)

class SelectTheme {
  constructor() {
    this.$toggleButton = $('.toggle')
    this.events()
  }

  // Events
  events() {
    this.$toggleButton.addEventListener('click', () => this.toggleTheme())
  }

  // Methods
  toggleTheme() {
    $('html').classList.toggle('dark')
  }
}

class Clock {
  constructor() {
    this.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    this.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    this.$hour = $('.hour')
    this.$minute = $('.minute')
    this.$second = $('.second')
    this.$time = $('.time')
    this.$date = $('.date')
    this.events()
  }

  // Events
  events() {
  }

  setTime() {
    const time = new Date()
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours % 12
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()

    this.$hour.style.transition = `${hours === 0 ? "background-color 0.5s ease-in" : "all 0.5s ease-in"}`
    this.$minute.style.transition = `${minutes === 0 ? "background-color 0.5s ease-in" : "all 0.5s ease-in"}`
    this.$second.style.transition = `${seconds === 0 ? "background-color 0.5s ease-in" : "all 0.5s ease-in"}`

    this.$hour.style.transform = `translate(-50%, -100%) rotate(${hoursForClock / 12 * 360}deg)`
    this.$minute.style.transform = `translate(-50%, -100%) rotate(${minutes / 60 * 360}deg)`
    this.$second.style.transform = `translate(-50%, -100%) rotate(${seconds / 60 * 360}deg)`

    this.$time.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`

    this.$date.innerHTML = `${this.days[day]}, ${this.months[month]} <span class="circle">${date}</span>` 
  }
}


window.onload = () => {
  const selectTheme = new SelectTheme()
  const clock = new Clock()
  setInterval(() => clock.setTime(), 1000)
}