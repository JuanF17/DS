import 'dotenv/config';
import express, { json } from 'express';
import CelularesController from './credito/celular/api/v1/celularescontroller.mjs';

const app = express();

// Middleware para devolver responses como JSON
app.use(json());

// Routes
const celularesApiController = new CelularesController();
app.use('/api/', celularesApiController.getRouter());

// Start the server
const PORT = process.env.PORT || 3001;

console.log(process.env.DATABASE_URL);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});