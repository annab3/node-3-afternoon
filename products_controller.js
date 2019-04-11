const express = require("express");
const app = express();

const create = (req, res) => {
  req.app
    .get("db")
    .create_product([
      req.body.name,
      req.body.description,
      req.body.price,
      req.body.image_url
    ])
    .then(result => res.status(200).json(result))
    .catch(error => {
      res.status(500).json({ error: "uh oh" });
      console.log(error);
    });
};

const getOne = (req, res) => {
  req.app
    .get("db")
    .read_product(req.params.id)
    .then(result => res.status(200).json(result))
    .catch(error => {
      res.status(500).json({ error: "uh oh" });
      console.log(error);
    });
};

const getAll = (req, res) => {
  req.app
    .get("db")
    .read_products()
    .then(result => res.status(200).json(result))
    .catch(error => {
      res.status(500).json({ error: "uh oh" });
      console.log(error);
    });
};

const update = (req, res) => {
  req.app
    .get("db")
    .update_product([req.query.desc, req.params.id])
    .then(result => res.status(200).json(result))
    .catch(error => {
      res.status(500).json({ error: "uh oh" });
      console.log(error);
    });
};

const remove = (req, res) => {
  req.app
    .get("db")
    .delete_product(req.params.id)
    .then(result => res.status(200).json(result))
    .catch(error => {
      res.status(500).json({ error: "uh oh" });
      console.log(error);
    });
};

module.exports = {
  create,
  getOne,
  getAll,
  update,
  remove
};
