import { writeData, readData } from '../storage/storageDriver.js'

export async function getTheme(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const id = req.params.id
  const message = await readData("themes.json")

  message.filter((element) => {
    if (element.id == id)
      res.status(201).send(element);
  })
};
