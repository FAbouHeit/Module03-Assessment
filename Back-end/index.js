import express from "express";
import db from './models/index.js'
import adminRouter from './Routes/Admin.Router.js'
import articleRouter from "./Routes/Article.Route.js";
import cors from 'cors'

const app=express();
app.use(express.json());
app.use(cors())
const PORT = 5001;

app.use(adminRouter);
app.use(articleRouter);

try{
    app.listen(PORT, ()=>{
        console.log("Server Started At Port: ", + PORT);
    })

    await db.sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await db.sequelize.sync({alter: true});
        console.log('Database synced!');
} catch(err){
    console.log(err.message)
}