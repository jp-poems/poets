/**
 * db
 * 
 * Get poetry from http://poetrydb.org
 */
import 'babel-polyfill'
import randomInt from 'random-int'

export const URL = {
  root: 'http://poetrydb.org/',
  authors: 'authors'
}

/**
 * Returns array of authors
 * @param {string} firstLetter
 */
export async function getAuthorsByLetter(firstLetter) {
  const letter = firstLetter
  let authors = []
  const response = await getJson(`${URL.root}${URL.authors}`)
  for(const author of response.authors) {
    if(author[0] === letter) {
      authors.push(author)
    }
  }
  return authors
}

export async function getRandomPoemByAuthor(author) {
  const response = await getJson(`${URL.root}${'author/'}${author}`)
  return response[randomInt(0, response.length - 1)]
}

async function getJson(url) {
  const response = await fetch(url)
  const json = await response.json()
  return json
}


