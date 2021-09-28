module.exports = (sequelize, Sequelize) => {
    const Sucursales = sequelize.define("sucursales", {
      descripcion: {
        type: Sequelize.STRING
      },
      regionesId:{type: Sequelize.INTEGER},
      departamentosId:{type: Sequelize.INTEGER},
      municipiosId:{type: Sequelize.INTEGER} ,
      comerciosId:{type: Sequelize.INTEGER}   

    });

    return Sucursales;
  };