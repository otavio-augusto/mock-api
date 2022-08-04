import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

export async function writeData(filename: string, content: any) {
  writeFileSync(join("./assets/", filename), JSON.stringify(content));
}

export async function readData(filename: string) {
  console.log(filename)
  const rawData = readFileSync(join("./assets/", filename), 'utf-8')
  return JSON.parse(rawData)
}
