import express, { json } from 'express';
import CiudadesController from './features/cuidades/api/v1/celulares-controller.mjs';

const app = express();

// Middleware para devolver responses como JSON
app.use(json());

// Routes
const celularesApiController = new CelularesController();
app.use('/api/', celularesApiController.getRouter());

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});