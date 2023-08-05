const { Router } = require("express");
const CharacterController = require("../controllers/CharacterController");

const charactersRouter = Router();
const characterController = new CharacterController();

// "http://localhost:8080/characters"
charactersRouter.get("/", characterController.findAll);

charactersRouter.get("/:id", characterController.findById);

charactersRouter.post("/", characterController.create);

charactersRouter.delete("/:id", characterController.delete);

module.exports = charactersRouter;
