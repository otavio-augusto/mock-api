import express from 'express'
//IMPORT ENV VARIABLES
import dotenv from 'dotenv'
dotenv.config()

//IMPORT ROTAS
import usersRoutes from './src/routes/userRoutes.js'
import themeRoutes from './src/routes/themeRoutes.js'


const { API_PORT } = process.env;

const app = express();
app.use(express.json());

app.use('/users', usersRoutes);
app.use('/theme', themeRoutes);

app.listen(API_PORT, () => {
  console.log(`Server Started at ${API_PORT}`)
})

