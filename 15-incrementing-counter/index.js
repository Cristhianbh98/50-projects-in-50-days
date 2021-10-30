const $counters = document.querySelectorAll('.counter .number')

$counters.forEach(counter => {
  counter.textContent = '0'

  const updateCounter = () => {
    const target = parseInt(counter.getAttribute('data-target'))
    const c = parseInt(counter.textContent)

    const increment = target / 100

    console.log(increment)

    if (c < target) {
      counter.textContent = `${Math.ceil(c + increment)}`
      setTimeout(updateCounter, 20)
    }
  }

  updateCounter()
})
