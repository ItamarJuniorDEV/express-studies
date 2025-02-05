import { Request, Response } from "express";

function index(req: Request, res: Response, next: any) {
  res.render("index");
}

function produto(req: Request, res: Response, next: any) {
  var produtos = [
    {
      id: 1,
      produto: "Memória Ram",
      descricao: "16GB",
    },
    {
      id: 2,
      produto: "Placa de video",
      descricao: "8GB",
    },
    {
      id: 3,
      produto: "Monitor",
      descricao: "fullHD",
    },
  ];
  res.send(
    `<h1>${produtos[parseInt(req.params.id)].produto}</h1> 
      <p>${produtos[parseInt(req.params.id)].descricao}</p>`
  );
}

export default { index, produto };
