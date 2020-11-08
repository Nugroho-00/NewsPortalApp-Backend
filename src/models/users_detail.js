'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users_Detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  users_Detail.init({
    users_id: DataTypes.INTEGER,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phone: DataTypes.STRING,
    description: DataTypes.TEXT,
    gender_id: DataTypes.INTEGER,
    birthdate: DataTypes.DATEONLY,
    picture: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users_Detail',
  });
  return users_Detail;
};