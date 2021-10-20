let percent = 0
const $loading = document.querySelector('span.loading__percent')
const $bg = document.querySelector('.container')

const load = setInterval(changePercent, 30)

function changePercent() {
  percent++
  if (percent > 99) clearInterval(load)
  $loading.innerText = percent + '%'

  $loading.style.opacity = 1 - (percent / 100)
  $bg.style.filter = `blur(${30 - ((percent / 100) * 30)}px)`
}
