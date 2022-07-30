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
    "message": "SINGULAR GET ACKNOWLEDGED!",
    "id": id
  }
  res.status(201).send(message);
};

export function putUser(req, res, next) {
  const message = {
    "message": `PUT USER ACKNOWLEDGED!`,
    "id": id
  }
  res.status(201).send(message);
};

export function postUser(req, res, next) {
  const id = req.params.id
  const message = {
    "message": `POST USER ACKNOWLEDGED!`,
    "id": id
  }
  res.status(201).send(message);
};

export function deleteUser(req, res, next) {
  const id = req.params.id
  const message = {
    "message": `DELETE USER ACKNOWLEDGED!`,
    "id": id
  }
  res.status(201).send(message);
};
