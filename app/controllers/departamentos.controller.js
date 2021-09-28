const db = require("../models");
const Departamentos = db.departamentos;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {

  if (!req.body.descripcion) {
    res.status(400).send({
      message: "El contenido no puede ser vacio!"
    });
    return;
  }


  const _Departamentos = {
    descripcion: req.body.descripcion,
    regionesId: req.body.regionesId
  };


  Departamentos.create(_Departamentos)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ocurrio un error al crear registros."
      });
    });
};

exports.findAll = (req, res) => {

    Departamentos.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Se produjo un error al recuperar los datos."
      });
    });
};


exports.findOne = (req, res) => {
  const _id = req.params.id;

  Departamentos.findAll({where: {id: _id}})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al recuperar datos por id"
      });
    });
};

exports.findOneRegiones = (req, res) => {
    const _id = req.params.id;
  
    Departamentos.findAll({where: {regionesId: _id}})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error al recuperar datos por id"
        });
      });
  };


exports.update = (req, res) => {
  const id = req.params.id;

  Departamentos.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Datos modificado correctamente."
        });
      } else {
        res.send({
          message: `No se pudo modificar datos con el id=${id}. datos vacios o no existe el dato modificado!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al modificar datos id=" + id
      });
    });
};


exports.delete = (req, res) => {
  const id = req.params.id;

  Departamentos.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Datos eliminaods!"
        });
      } else {
        res.send({
          message: `No se pudo modificar datos con el id=${id}. datos vacios o no existe el dato modificado!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al modificar datos id=" + id
      });
    });
};