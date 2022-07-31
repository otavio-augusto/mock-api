import express from 'express'
//IMPORT ENV VARIABLES
import dotenv from 'dotenv'
dotenv.config()

//CORS IMPORTS
import cors from 'cors'
//IMPORT ROTAS
import usersRoutes from './src/routes/userRoutes.js'
import themeRoutes from './src/routes/themeRoutes.js'


const { API_PORT } = process.env;

const app = express();
app.use(express.json());

app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/users', usersRoutes);
app.use('/themes', themeRoutes);

app.listen(API_PORT, () => {
  console.log(`Server Started at ${API_PORT}`)
})

