module.exports = (sequelize, Sequelize) => {
    const Departamentos = sequelize.define("departamentos", {
      descripcion: {
        type: Sequelize.STRING
      },
      regionesId:{type: Sequelize.INTEGER}
      
    });

    
    return Departamentos;
  };