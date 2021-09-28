module.exports = (sequelize, Sequelize) => {
    const Usuarios = sequelize.define("usuarios", {
      user: {
        type: Sequelize.STRING
      },
      password:{type: Sequelize.STRING}
    });

    return Usuarios;
  };