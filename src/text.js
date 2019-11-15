let mainText

export function init() {
  console.log('attempt to init main text entity...')
  if(document.querySelector('#main-text')) {
    mainText = document.querySelector('#main-text')
    console.log('Main text entity init:', mainText)
    printMain('')
  }
  else {
    requestAnimationFrame(init)
  }
}

export function printMain(text) {
  mainText.setAttribute('text-geometry', { value: text })
}
