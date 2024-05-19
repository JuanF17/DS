import { PrismaClient } from '@prisma/client';

export default class CelularesModelPrisma {

  #prismaClient;

  constructor() {
    this.#prismaClient = new PrismaClient();
  }

  async addCelular(Phones){
    const response = await this.#prismaClient.Phones.create({data:Phones});
    console.log(response)
  }

  async getAllCelulares() {
    return await this.#prismaClient.Phones.findMany();
  }

  async getAllClientes() {
    return await this.#prismaClient.Clients.findMany();
  }
  async addCliente(Clients){
    const respuesta = await this.#prismaClient.Clients.create({data:Clients});
    console.log(respuesta)
  }
}