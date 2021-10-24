class SoundBoard {
  constructor() {
    this.sounds = document.querySelectorAll('audio')
    this.sounds.forEach(sound => this.createBtn(sound))
    this.currentSound = null

    this.buttonsContainer = document.querySelector('#buttons')
    this.events()
  }

  // Events
  events() {
    this.buttonsContainer.addEventListener('click', (e) => this.handleClick(e))
  }

  //Methods
  createBtn(sound) {
    const name = sound.getAttribute('title')
    const soundId = sound.getAttribute('id')

    const btn = document.createElement('button')

    btn.classList.add('btn')
    btn.setAttribute('sound-id', soundId)
    btn.innerText = name
  
    document.getElementById('buttons').appendChild(btn)
  }

  handleClick(e) {
    const el = e.target
    if (el.classList.contains('btn')) this.playSound(el)
  }

  playSound(button) {
    const soundToPlay = button.getAttribute('sound-id')

    if (this.currentSound !== null) this.stopSound()

    document.getElementById(soundToPlay).play()
    this.currentSound = soundToPlay
  }

  stopSound() {
    const currentSound = document.getElementById(this.currentSound)
    currentSound.pause()
    currentSound.currentTime = 0
  }
}

const soundBoard = new SoundBoard()
