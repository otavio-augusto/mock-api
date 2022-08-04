import { readData } from '../storage/storageDriver'
import { Request, Response } from 'express';
import { theme } from './interfaces/themeCollection.interface'

export async function getTheme(req: Request, res: Response) {

  const id = req.params.id
  const message: theme[] = await readData("themes.json")

  message.filter((element: theme) => {
    if (element.id.toString() == id)
      res.status(201).send(element);
  })
};
