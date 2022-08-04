import { writeData, readData } from '../storage/storageDriver'

export async function updateData(fileName: string, childObject: { id: any; }) {
  const parentObject = await readData("users.json")

  for (let i = 0; i < parentObject.length; i++) {
    if (childObject.id == parentObject[i].id) {
      parentObject[i] = childObject
      break;
    }
  }
  await writeData(fileName, parentObject)
  return true;
}

export async function appendData(fileName: string, childObject: any) {
  const parentObject = await readData(fileName)
  parentObject.push(childObject)
  await writeData(fileName, parentObject)
  return true;
}

export async function deleteData({ fileName, childObjectId }: { fileName: any; childObjectId: any; }) {
  const parentObject = await readData(fileName)
  const newParentObject = parentObject.filter((item: { id: any; }) => { return item.id != childObjectId })
  await writeData(fileName, newParentObject)
};
