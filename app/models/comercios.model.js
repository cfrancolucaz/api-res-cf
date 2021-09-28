module.exports = (sequelize, Sequelize) => {
    const Comercios = sequelize.define("comercios", {
      descripcion: {
        type: Sequelize.STRING
      },
      encargado:{type: Sequelize.STRING},
      municipiosId:{type: Sequelize.INTEGER}
      
    });

    
    return Comercios;
  };