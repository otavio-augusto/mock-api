import { writeData, readData } from '../storage/storageDriver.js'

export async function updateData(fileName, childObject){
  const parentObject = await readData("users.json")

  for (let i = 0; i < parentObject.length; i++) {
      if(childObject.id == parentObject[i].id){
        parentObject[i] = childObject
        break;
      }
  }
  await writeData(fileName, parentObject)
  return true;
}

export async function appendData(fileName, childObject) {
  const parentObject = await readData(fileName)
  parentObject.push(childObject)
  await writeData(fileName, parentObject)
  return true;
}

export async function deleteData(fileName, childObjectId) {
  const parentObject = await readData(fileName)
  const newParentObject = parentObject.filter((item) => {return item.id != childObjectId})
  await writeData(fileName, newParentObject)
};
