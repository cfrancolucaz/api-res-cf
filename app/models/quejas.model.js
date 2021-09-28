module.exports = (sequelize, Sequelize) => {
    const Quejas = sequelize.define("quejas", {
      descripcion: {
        type: Sequelize.STRING
      },
      fecha: {
        type: Sequelize.STRING
      },
      regionesId:{type: Sequelize.INTEGER},
      departamentosId:{type: Sequelize.INTEGER},
      municipiosId:{type: Sequelize.INTEGER} ,
      comerciosId:{type: Sequelize.INTEGER} ,
      sucursalesId:{type: Sequelize.INTEGER}
    });

    return Quejas;
  };