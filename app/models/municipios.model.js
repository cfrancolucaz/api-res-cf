module.exports = (sequelize, Sequelize) => {
    const Municipios = sequelize.define("municipios", {
      descripcion: {
        type: Sequelize.STRING
      },
      departamentosId:{type: Sequelize.INTEGER}
      
    });

    
    return Municipios;
  };