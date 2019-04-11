require("dotenv").config();
const massive = require("massive");
const express = require("express");
const app = express();
const {
  create,
  getOne,
  getAll,
  update,
  remove
} = require("./products_controller");

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
    console.log("Database Connected");
  })
  .catch(error => console.log(error));

app.use(express.json());

app.get("/api/products", getAll);
app.get("/api/products/:id", getOne);
app.put("/api/products/:id", update);
app.post("/api/products", create);
app.delete("/api/products/:id", remove);

app.listen(process.env.SERVER_PORT, () => console.log("Listening"));
