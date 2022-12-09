import query from '../db/index.js'

export async function getCats () {
  const result = await query('SELECT * FROM cats;')
  const catsArray = result.rows
  return catsArray
}