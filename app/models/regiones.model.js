module.exports = (sequelize, Sequelize) => {
    const Regiones = sequelize.define("regiones", {
      descripcion: {
        type: Sequelize.STRING
      }
    });
    
    return Regiones;
  };