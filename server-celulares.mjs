import express, { json } from 'express';
import CiudadesController from './features/cuidades/api/v1/celulares-controller.mjs';

const app = express();


app.use(json());


const celularesApiController = new CelularesController();
app.use('/api/', celularesApiController.getRouter());


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
