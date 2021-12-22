const rangeInput = document.getElementById('range')

rangeInput.addEventListener('input', e => {
  const value = parseInt(e.target.value)
  const label = e.target.nextElementSibling
  label.innerText = value

  const rangeWidth = parseInt(getComputedStyle(e.target).getPropertyValue('width').slice(0, -2))

  const labelWidth = parseInt(getComputedStyle(label).getPropertyValue('width').slice(0, -2))

  const thumb_width = 24

  const max = parseInt(e.target.max)
  
  const left = value * ((rangeWidth - thumb_width) / max) - (labelWidth - thumb_width) / 2

  label.style.left = left + 'px'
})
