import { writeData, readData } from '../storage/storageDriver.js'

//ROTA GET PLURAL
export async function getUsers(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const message = await readData("users.json")
  res.status(201).json(message);
};

//ROTA GET SINGULAR
export async function getUser(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const message = await readData("users.json")

  message.filter((item) => {
    if (req.params.id == item.id)
      res.status(201).send(item);
  })
};

export function putUser(req, res, next) {
  res.status(201).send("OK");
};

export async function postUser(req, res, next) {
  await writeData("users.json", req.body)
  res.status(201).send("GOT PUT!");
};

export function deleteUser(req, res, next) {
  const id = req.params.id
  const message = {
    "message": `DELETE USER ACKNOWLEDGED!`,
    "id": id
  }
  res.status(201).send(message);
};
