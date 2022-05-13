import dotenv from 'dotenv';
import express from 'express';
import userRoutes from './routers/userRoutes';

dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use('/user', userRoutes);

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});
