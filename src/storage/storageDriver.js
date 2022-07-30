import { writeFileSync } from 'fs'
import { promises as fs } from "fs";
import { join } from 'path'

export async function writeData(filename, content) {
  const currentData = await readData(join(filename))
  currentData['users'].push(content)
  writeFileSync(join("./assets/", filename), JSON.stringify(currentData));
}

export async function readData(filename) {
  console.log(filename)
  const callback = (error, data) => {
    if (error)
      console.log(error)
    else
      return data
  }
  const rawData = await fs.readFile(join("./assets/", filename), callback)
  return JSON.parse(rawData)['users']
}
