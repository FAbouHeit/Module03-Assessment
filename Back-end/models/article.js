'use strict';
// import {Model} from "sequelize"
// const {
//   Model
// } = require('sequelize');
import {Model} from 'sequelize'
export default  (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      // Article.hasOne(models.NotificationModel,{
      //   onDelete:'CASCADE',
      //   onUpdate:'CASCADE'
      // })
      // // define association here
      // Transaction.belongsTo(models.UserModel)
      Article.belongsTo(models.CategoryModel)
    }
  }
  Article.init({
    title: DataTypes.STRING,
    category: DataTypes.STRING,
    body: DataTypes.STRING,
    author: DataTypes.STRING,
    imageURL: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};