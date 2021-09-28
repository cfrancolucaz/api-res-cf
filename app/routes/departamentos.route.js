module.exports = app => {
    const departamentos = require("../controllers/departamentos.controller.js");
  
    var router = require("express").Router();
      
    router.post("/", departamentos.create);  
    router.get("/", departamentos.findAll);
    router.get("/:id", departamentos.findOne);
    router.get("/regiones/:id", departamentos.findOneRegiones);
    router.put("/:id", departamentos.update);
    router.delete("/:id", departamentos.delete);
  
    app.use("/api/departamentos", router);
  };