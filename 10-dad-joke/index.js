class GenerateJoke {
  constructor() {
    this.$joke = document.querySelector('#joke')
    this.$btn = document.querySelector('#btn-joke')
    this.events()
    this.getJoke()
  }

  // Events
  events() {
    this.$btn.addEventListener('click', () => this.getJoke())
  }

  async getJoke() {
    const config = {
        headers: {
        Accept: 'application/json'
      }
    }

    const response = await fetch('https://icanhazdadjoke.com/', config)
    const data = await response.json()

    this.$joke.textContent = data.joke
  }
}

const generateJoke = new GenerateJoke()
