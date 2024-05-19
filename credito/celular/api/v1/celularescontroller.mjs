import express from "express";
import CiudadesModelPrisma from "../../celularesmodelprisma.mjs";

const { Router } = express;

export default class CelularesController {
  #router = Router();
  #celularesModel = null;
  
  constructor() {
    this.#celularesModel = new CiudadesModelPrisma();
    this.registerRoutes();
  }
  
  getRouter() {
    return this.#router;
  }
  
  registerRoutes() {
    const routerV1 = Router();
    routerV1.get(`/celulares`, async (req, res) => await this.getAllCelulares(req, res));
    routerV1.post(`/celulares`, async (req, res) => await this.createCelular(req, res));
    routerV1.get(`/clientes`, async (req, res) => await this.getAllClientes(req, res));
    routerV1.post(`/clientes`, async (req, res) => await this.createCliente(req, res));
    this.#router.use(`/v1`, routerV1);
  }
  
  async getAllCelulares(req, res) {
    try {
      const celulares = await this.#celularesModel.getAllCelulares();
      res.json(celulares);
    } catch (error) {
      console.error(`error: ${error}`);
    }
  }
  async getAllClientes(req, res) {
    try {
      const clientes = await this.#celularesModel.getAllClientes();
      res.json(clientes);
    } catch (error) {
      console.error(`error: ${error}`);
    }
  }

  async createCelular(req, res) {
    try {
      const celular = req.body;
      console.info({ciudad});
      this.#celularesModel.addCelular(celular);
      res.send('celular creado');
    } catch (error) {
      console.error(`error: ${error}`);
    }
  }

  async createCliente(req, res) {
    try {
      const cliente = req.body;
      console.info({cliente});
      this.#celularesModel.addCliente(cliente);
      res.send('cliente creado');
    } catch (error) {
      console.error(`error: ${error}`);
    }
  }
}
