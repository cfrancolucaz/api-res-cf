const db = require("../models");
const Usuarios = db.usuarios;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {

  if (!req.body.user) {
    res.status(400).send({
      message: "El contenido no puede ser vacio!"
    });
    return;
  }


  const _usuarios = {
    user: req.body.user,
    password: req.body.password
  };


  Usuarios.create(_usuarios)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ocurrio un error al crear Usuarios."
      });
    });
};

exports.findAll = (req, res) => {

  Usuarios.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Se produjo un error al recuperar los Usuarios."
      });
    });
};


exports.findOne = (req, res) => {
  const _user = req.params.user;
  const _pass = req.params.pass;

  Usuarios.findAll({where: {user: _user, password: _pass}})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al recuperar Usuarios por user and pass"
      });
    });
};


exports.update = (req, res) => {
  const id = req.params.id;

  Usuarios.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Usuarios modificado correctamente."
        });
      } else {
        res.send({
          message: `No se pudo modificar Usuario con el id=${id}. Usuarios vacios o no existe el usuario modificado!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al modificar usaurios id=" + id
      });
    });
};


exports.delete = (req, res) => {
  const id = req.params.id;

  Usuarios.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Usuario eliminado!"
        });
      } else {
        res.send({
            message: `No se pudo modificar Usuario con el id=${id}. Usuarios vacios o no existe el usuario modificado!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "No se encontro el usuario segun  id"
      });
    });
};



