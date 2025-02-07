import express from "express";
import clientsRouter from "./routes/clients";
import db from "./db";

const app = express();
const port = parseInt(`${process.env.PORT}`);

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(clientsRouter);

db.sync()
  .then(() => {
    console.log(`Conectado com sucesso ao banco: ${process.env.DB_NAME}`);
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  });
