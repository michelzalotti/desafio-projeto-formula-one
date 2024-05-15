import cors from "@fastify/cors";
import "./server";
import { app } from "./server";
import { teams, drivers } from "./data/data";

app.register(cors, {
  origin: "*",
});

app.get("/teams", (req, res) => {
  res.type("application/json").code(200);

  return teams;
});

app.get("/drivers", (req, res) => {
  res.type("application/json").code(200);

  return drivers;
});

interface DriverParams {
  id: string;
}

app.get<{ Params: DriverParams }>("/drivers/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const driver = drivers.find((d) => d.id === id);

  if (!driver) {
    res.type("application/json").code(404);
    return { message: "Piloto não encontrado." };
  } else {
    res.type("application/json").code(200);
    return driver;
  }
});
