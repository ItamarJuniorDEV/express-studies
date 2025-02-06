import { Request, Response } from "express";
import { IClients } from "../models/clients";
import ClientRepository from "../models/clientsModel";

async function index(req: Request, res: Response, next: any) {
  const clients = await ClientRepository.findAll();
  res.render("index", { clients: clients });
}

function produto(req: Request, res: Response, next: any) {
  var produtos = [
    {
      nome: "Memória Ram",
      descricao: "16GB",
    },
    {
      nome: "Placa de video",
      descricao: "8GB",
    },
    {
      nome: "Monitor",
      descricao: "fullHD",
    },
  ];
  var produto = produtos[parseInt(`${req.params.id}`)];
  res.render("produto", { produto: produto });
}

export default { index, produto };
