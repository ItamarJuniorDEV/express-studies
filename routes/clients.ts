import { Router } from "express";
import clientsController from "../controllers/clientController";

const router = Router();

router.get("/clients", clientsController.index);
router.get("/clients/create", clientsController.create);
router.post("/clients", clientsController.store);
router.get("/clients/:id", clientsController.show);
router.get("/clients/:id/edit", clientsController.edit);

export default router;
