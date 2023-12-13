import article from '../models/article.js';
import db from '../models/index.js'

const {ArticleModel} = db;

export const getAllArticles = async (req,res)=>{
    const allArticles = await ArticleModel.findAll();
    res.status(200).json(allArticles);
}


export const getOneArticle = async (req,res)=>{
    const id = req.params.id;
    const article = await ArticleModel.findOne({where: {id}});
    res.status(200).json(article);
}

export const addArticle = async (req,res)=>{

    const {title, category,body,author,imageURL} = req.body;

    try{
        const newArticle = await ArticleModel.create({
            title,
            category, 
            body,
            author, 
            imageURL,
        });
        await newArticle.save()
            res.status(201).json({message: "user created successfully!"})
        } catch (error) {
            console.log(error.message);
        }
}

export const updateArticle = async (req,res)=>{
    const id = req.params.id;

    try{
        const article = await ArticleModel.findByPk(id);
        article.title = req.body.title || article.title
        article.category = req.body.category || article.category
        article.body = req.body.body || article.body
        article.author = req.body.author || article.author
        article.imageURL = req.body.imageURL || article.imageURL
    } catch (err){
        console.log(err.message);
    }
    await article.save();
    res.status(200).json({message: "done successfully!"});
}

export const deleteArticle = async (req,res)=>{
    const id = req.params.id;

    try{
        const article = await ArticleModel.findByPk(id);
        await article.destroy();
        res.status(200).json('Article has been deleted successfully!')
    } catch (err){
        console.log(err.message);
    }
}

export const updateImage = async (req,res)=>{

    try{

        const id = req.params.id;
        const article = await ArticleModel.findByPk(id);
    
        if (!article) {
            return res.json({error: "no article"})
        }   
    
        const newImage = req.file;
        const oldImagePath = user.pic;
    
        if(!newImage){
            return res.status(400).json({error: "Error Uploading Image"});
        }     
    
         article.imageURL = newImage.path ;
    
        if(oldImagePath !== null && fs.existsSync(oldImagePath)){
            fs.unlink(oldImagePath, (err)=>{
                if(err) throw err;
            })
        }
        
        await article.save();
    
        res.status(200).json({message: "done successfully!"});
    
        } catch (error){
            next(error)
        }
}