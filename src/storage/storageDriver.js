import { writeFileSync } from 'fs'
import { promises as fs } from "fs";
import { join } from 'path'

export async function writeData(filename, content) {
  writeFileSync(join("./assets/", filename), JSON.stringify(content));
}

export async function readData(filename) {
  console.log(filename)
  const callback = (error, data) => { error ? console.log(error) : data }
  const rawData = await fs.readFile(join("./assets/", filename), callback)
  return JSON.parse(rawData)
}
