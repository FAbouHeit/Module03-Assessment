import { Sequelize } from "sequelize";
// import User from './user.js'
// import Transaction from "./transaction.js";
// import Notification from "./notification.js";
// import Wallet from "./wallet.js";
// import Promotion from "./promotion.js";
import Category from '../models/category.js'
// import Category from '../models/categor'
import Admin from "../models/admin.js"
import Article from "../models/article.js"

const sequelize = new Sequelize(
    "codidb","fuad1234","fuad1234",
    {
        host: "db4free.net",
        dialect: 'mysql'
    }
);



// const UserModel = User(sequelize, Sequelize);  
// const TransactionModel = Transaction(sequelize, Sequelize);  
// const NotificationModel =Notification(sequelize,Sequelize)
// const WalletModel=Wallet(sequelize,Sequelize)
// const PromotionModel=Promotion(sequelize,Sequelize)
const ArticleModel = Article(sequelize,Sequelize);
const AdminModel = Admin(sequelize,Sequelize);
const CategoryModel = Category(sequelize,Sequelize);

const db = {
  sequelize,
  Sequelize,
  ArticleModel,
  AdminModel,
  CategoryModel,
};



Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }

});
export default db;

  