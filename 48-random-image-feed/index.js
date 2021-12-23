const container = document.querySelector('.container')

const getRandomNr = () => Math.floor(Math.random() * 10) + 300
const getRandomSize = () => `${getRandomNr()}x${getRandomNr()}`

for (let i = 0; i < 30; i++) {
  const image = document.createElement('img')
  image.src = 'https://source.unsplash.com/random/' + getRandomSize()

  container.appendChild(image)
}
