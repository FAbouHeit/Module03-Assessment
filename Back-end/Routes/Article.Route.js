import express from "express";
import { addArticle, deleteArticle, getAllArticles, getOneArticle, updateArticle, updateImage } from "../Controllers/Article.Controller.js";
import upload from '../Controllers/multer.js'

const router = express.Router();

router.get('/all', getAllArticles);
router.get('/:id', getOneArticle);
router.post('/', addArticle);
router.delete("/", deleteArticle);
router.patch("/", updateArticle)
router.put("/image", upload.single("photo"),updateImage)

export default router;