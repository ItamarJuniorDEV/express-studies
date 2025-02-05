import { Router } from "express";
import clientsController from "../controllers/clientController";

const router = Router();

router.get("/", clientsController.index);
router.get("/produto/:id", clientsController.produto);

export default router;
