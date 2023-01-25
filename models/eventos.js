'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  class Eventos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Eventos.init({
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    dt_evento: DataTypes.DATE,
    endereco: DataTypes.STRING,
    id_user: DataTypes.INTEGER


  }, {
    sequelize,
    modelName: 'Eventos',
  });
  
  return Eventos;
};