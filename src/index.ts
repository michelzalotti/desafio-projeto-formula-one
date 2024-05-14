import "./server";
import { app } from "./server";

const teams = [
  { id: 1, name: "Ferrari" },
  { id: 2, name: "McLaren" },
  { id: 3, name: "Red Bull Racing" },
];

const drivers = [
  { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
  { id: 2, name: "Lewis Hamilton", team: "Ferrari" },
  { id: 3, name: "Lando Norris", team: "McLaren" },
];

app.get("/teams", (req, res) => {
  res.type("application/json").code(200);

  return teams;
});

app.get("/drivers", (req, res) => {
  res.type("application/json").code(200);

  return drivers;
});
