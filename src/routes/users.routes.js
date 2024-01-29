const  { Router } = require ("express");
const UsersController = require("../constrollers/UsersController");

const usersRoutes = Router();

const userController = new UsersController();

usersRoutes.post("/", usersController.create);

module.exports = usersRoutes;