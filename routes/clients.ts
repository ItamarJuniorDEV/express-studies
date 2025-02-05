import { Router } from "express";
import clientsController from "../controllers/clientController";

const router = Router();

router.get("/", clientsController.index);

router.get("/saudacao/:nome?", (req, res) => {
  if (req.params.nome === undefined) {
    res.send("TreinaWeb");
  } else {
    res.send(`<h1>Ola ${req.params.nome}</h1>`);
  }
});
router.get("/produto/:id", (req, res) => {
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
});

export default router;
