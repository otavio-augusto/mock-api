export function getTheme(req, res, next) {
  const id = req.params.id
  const message = {
    "message": "SINGULAR THEME GET ACKNOWLEDGED!",
    "id": id
  }

  res.status(201).send(message);
};
