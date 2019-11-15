import * as AFRAME from 'aframe'
import * as DB from './db'
import randomInt from 'random-int'
import 'aframe-text-geometry-component'
import { init as initText, printMain } from './text'

window.onload = init()

let currentLine = -1
let frameIndex = 0
let printInterval = 200
let currentPoem

async function init() {
  initText()
  await getRandomPoem()
  printLoop()
}

async function getRandomPoem() {
  const authors = await DB.getAuthorsByLetter('J')
  currentPoem = await DB.getRandomPoemByAuthor(authors[randomInt(0, authors.length - 1)])
  console.log(authors, currentPoem)
}

async function printLoop() {
  if(++frameIndex % printInterval === 0) {
    if(++currentLine < currentPoem.lines.length) {
      printMain(currentPoem.lines[currentLine])
    }
    else {
      await getRandomPoem()
    }
  }
  requestAnimationFrame(printLoop)
}
