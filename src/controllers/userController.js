//ROTA GET PLURAL
export function getUsers(req, res, next) {
  const message = {
    "message": "PLURAL GET ACKNOWLEDGED!"
  }

  res.status(201).send(message);
};

//ROTA GET SINGULAR
export function getUser(req, res, next) {
  const id = req.params.id
  const message = {
    "message": `SINGULAR GET ACKNOWLEDGED!`,
    "id": id
  }
  res.status(201).send(message);
};

export function putUser(req, res, next) {
  res.status(201).send('Requisição recebida com sucesso!');
};

export function postUser(req, res, next) {
  let id = req.params.id;
  res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};

export function deleteUser(req, res, next) {
  let id = req.params.id;
  res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};
