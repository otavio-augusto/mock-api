import { readData } from '../storage/storageDriver'
import { updateData, appendData, deleteData } from './controllerUtils'
import { IUserCollection, UserTableProps } from './interfaces/userCollection.interface';
import { Request, Response } from 'express';

//ROTA GET PLURAL
export async function getUsers(req: Request, res: Response) {
  const message = await readData("users.json")
  res.status(201).json(message);
};

//ROTA GET PLURAL FILTRADO
export async function getUser(req: Request, res: Response) {
  const message = await readData("users.json")
  let collection: Object[] = []
  if (req.query.cpf)
    message.filter((item: IUserCollection) => {
      if (req.query.cpf == item.cpf)
        collection.push(item)
    });

  else
    message.filter((item: IUserCollection) => {
      console.log(item)
      if (req.params.id == item.id.toString())
        collection.push(item)
    })
  res.status(201).json(collection);
};

export async function putUser(req: Request, res: Response) {
  await appendData("users.json", req.body)
  res.status(201).send("POST OK!");
};

export async function postUser(req: Request, res: Response) {
  await updateData("users.json", req.body)
  res.status(201).send("PUT OK!");
};

export async function deleteUser(req: Request, res: Response) {
  await deleteData({ fileName: "users.json", childObjectId: req.params.id })
  res.status(201).send("DELETE OK!");
};

