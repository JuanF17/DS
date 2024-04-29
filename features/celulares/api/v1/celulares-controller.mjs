import express from "express";
import CelularesModel from "../../celulares-model.mjs";
 
const { Router } = express;

export default class celularesController {
  #router = Router();
  #CelularesModel = null;
  
  constructor() {
    this.registerRoutes();
  }
  
  getRouter() {
    return this.#router;
  }
  
  registerRoutes() {
    const routerV1 = Router();
    routerV1.get(`/celular`, async (req, res) => await this.getAllCelulares(req, res));
    
    this.#router.use(`/v1`, routerV1);
  }
  
  async getAllCelulares(req, res) {
    try {
      this.#CelularesModel = new CelularesModel();
      this.#CelularesModel.connect();
      const cels = await this.#CelularesModel.getAllCelulares();
      res.json(cels);
    } catch (error) {
      console.error(`error: ${error}`);
    } finally {
      this.#CelularesModel.closeConnection();
    }
  }
}