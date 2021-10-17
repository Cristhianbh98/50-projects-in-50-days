class Steps {
  constructor() {
    this.steps = document.querySelectorAll('.step')
    this.btnPrev = document.querySelector('#prev')
    this.btnNext = document.querySelector('#next')
    this.progress = document.querySelector('#progress')
  
    this.percent = 100 / (this.steps.length - 1)

    this.current = 0
    this.events()
  }

  // Events
  events() {
    this.btnPrev.addEventListener('click', () => this.prevHandler())
    this.btnNext.addEventListener('click', () => this.nextHandler())
  }

  // Methods
  prevHandler() {
    if (!this.btnPrev.disabled) {
      const currentStep = this.steps[this.current]
      
      this.current--

      currentStep.classList.remove('active')
      this.progress.style.width = `${this.current * this.percent}%`;
    }

    this.handleToggleButton() 
  }

  nextHandler() {
    if (!this.btnNext.disabled) {
      const currentStep = this.steps[this.current]
      
      this.current++ 

      currentStep.nextElementSibling.classList.add('active')
      this.progress.style.width = `${this.current * this.percent}%`;
    }

    this.handleToggleButton() 
  }

  handleToggleButton() {
    if (this.current === this.steps.length - 1) this.btnNext.disabled = true
    if (this.current > 0 && this.btnPrev.disabled) this.btnPrev.disabled = false
    if (this.current < this.steps.length - 1 && this.btnNext.disabled) this.btnNext.disabled = false
    if (this.current === 0) this.btnPrev.disabled = true
  }
}

const steps = new Steps()
