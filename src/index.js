import * as AFRAME from 'aframe'
import * as DB from './db'
import randomInt from 'random-int'

init()

async function init() {
  const authors = await DB.getAuthorsByLetter('J')
  const poem = await DB.getRandomPoemByAuthor(authors[randomInt(0, authors.length - 1)])
  console.log(authors, poem)
}
