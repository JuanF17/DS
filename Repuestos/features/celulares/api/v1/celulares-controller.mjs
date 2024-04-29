import express from "express";
import CiudadesModel from "../../ciudades-model.mjs";
 
const { Router } = express;

export default class CiudadesController {
  #router = Router();
  #CiudadesModel = null;
  
  constructor() {
    this.registerRoutes();
  }
  
  getRouter() {
    return this.#router;
  }
  
  registerRoutes() {
    const routerV1 = Router();
    routerV1.get(`/ciudades`, async (req, res) => await this.getAllCiudades(req, res));
    
    this.#router.use(`/v1`, routerV1);
  }
  
  async getAllCiudades(req, res) {
    try {
      this.#CiudadesModel = new CiudadesModel();
      this.#CiudadesModel.connect();
      const ciudades = await this.#CiudadesModel.getAllCiudades();
      res.json(ciudades);
    } catch (error) {
      console.error(`error: ${error}`);
    } finally {
      this.#CiudadesModel.closeConnection();
    }
  }
}