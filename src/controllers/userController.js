import { readData } from '../storage/storageDriver.js'
import { updateData, appendData, deleteData } from './controllerUtils.js'

//ROTA GET PLURAL
export async function getUsers(req, res, next) {
  const message = await readData("users.json")
  res.status(201).json(message);
};

//ROTA GET SINGULAR
export async function getUser(req, res, next) {
  const message = await readData("users.json")

  message.filter((item) => {
    if (req.params.id == item.id)
      res.status(201).send(item);
  })
};

export async function putUser(req, res, next)  {
  await appendData("users.json", req.body)
  res.status(201).send("POST OK!");
};

export async function postUser(req, res, next) {
  await updateData("users.json", req.body)
  res.status(201).send("PUT OK!");
};

export async function deleteUser(req, res, next) {
  await deleteData("users.json", req.params.id)
  res.status(201).send("DELETE OK!");
};
