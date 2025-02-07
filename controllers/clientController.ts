import { Request, Response } from "express";
import { IClients } from "../models/clients";
import ClientRepository from "../models/clientsModel";

async function index(req: Request, res: Response, next: any) {
  const clients = await ClientRepository.findAll();
  res.render("index", { clients: clients });
}

async function show(req: Request, res: Response, next: any) {
  const client = await ClientRepository.findByPk(req.params.id);
  res.render("show", { client: client });
}

export default { index, show };
