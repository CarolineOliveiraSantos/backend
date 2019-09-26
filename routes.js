const { Router } = ("express");
const UserController = require("./controllers/UserContolllers");

routes.post("/userstore", UserController.store);
routes.get("/userlist/:email", UserController.list);
module.exports = routes;
