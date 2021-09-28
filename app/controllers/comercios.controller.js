const db = require("../models");
const Comercios = db.comercios;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {

  if (!req.body.descripcion) {
    res.status(400).send({
      message: "El contenido no puede ser vacio!"
    });
    return;
  }

  
  const _Comercios = {
    descripcion: req.body.descripcion,
    encargado: req.body.encargado,
    municipiosId: req.body.municipiosId
  };


  Comercios.create(_Comercios)
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

    Comercios.findAll()
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

  Comercios.findAll({where: {id: _id}})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al recuperar datos por id"
      });
    });
};



exports.findOneMunicipio = (req, res) => {
    const _id = req.params.id;
  
    Comercios.findAll({where: {municipiosId: _id}})
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

  Comercios.update(req.body, {
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

  Comercios.destroy({
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