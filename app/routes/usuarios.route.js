module.exports = app => {
    const usuarios = require("../controllers/usuarios.controller.js");
  
    var router = require("express").Router();
      
    router.post("/", usuarios.create);  
    router.get("/", usuarios.findAll);
    router.get("/:user/:pass", usuarios.findOne);
    router.put("/:id", usuarios.update);
    router.delete("/:id", usuarios.delete);
  
    app.use("/api/usuarios", router);
  };