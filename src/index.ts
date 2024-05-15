import "./server";
import { app } from "./server";
import cors from "@fastify/cors";

const teams = [
  { id: 1, name: "Ferrari" },
  { id: 2, name: "McLaren" },
  { id: 3, name: "Red Bull Racing" },
  { id: 4, name: "Aston Martin Aramco Formula One Team" },
  { id: 5, name: "BWT Alpine F1 Team" },
  { id: 6, name: "Mercedes-AMG Petronas Formula One Team" },
  { id: 7, name: "MoneyGram Haas F1 Team" },
  { id: 8, name: "Oracle Red Bull Racing" },
  { id: 9, name: "Scuderia Ferrari" },
  { id: 10, name: "Stake F1 Team Kick Sauber" },
  { id: 11, name: "Visa Cash App RB Formula One Team" },
  { id: 12, name: "Williams Racing" },
];

const drivers = [
  { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
  { id: 2, name: "Lewis Hamilton", team: "Ferrari" },
  { id: 3, name: "Lando Norris", team: "McLaren" },
];

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
