import express from 'express'
//IMPORT ENV VARIABLES
import dotenv from 'dotenv'
dotenv.config()

//CORS IMPORTS
//IMPORT ROTAS
import usersRoutes from './src/routes/userRoutes'
import themeRoutes from './src/routes/themeRoutes'


const { API_PORT } = process.env;

const app = express();
app.use(express.json());

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/users', usersRoutes);
app.use('/themes', themeRoutes);

app.listen(API_PORT, () => {
  console.log(`Server Started at ${API_PORT}`)
})

