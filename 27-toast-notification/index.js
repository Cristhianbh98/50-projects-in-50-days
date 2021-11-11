const btn = document.getElementById('create')
const toasts = document.getElementById('toasts')

const messages = [
  'Message One',
  'Message Two',
  'Message Three',
  'Message Four'
]

const colors = [
  'red',
  'blue',
  'black',
  'green',
  'rebeccapurple'
]

btn.addEventListener('click', () => createNotification())

function createNotification() {
  const toast = document.createElement('DIV')
  toast.classList.add('toast')
  toast.textContent = messages[Math.floor(Math.random() * messages.length)]
  toast.style.color = colors[Math.floor(Math.random() * colors.length)]

  toasts.append(toast)

  setTimeout(() => toast.remove(), 3000)
}
