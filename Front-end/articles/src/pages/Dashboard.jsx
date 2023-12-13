import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Dashboard({setSelectedArticle}) {

    const navigate = useNavigate();
const [articles, setArticles] = useState([]);


useEffect(()=>{
    axios.get(`http://localhost:5001/all`)
    .then((res)=>{
        setArticles(res.data);
    })
})


const handleArticle = async(item)=>{
    setSelectedArticle(item);
    try{
        navigate(`/edit`)
    } catch (error){
        console.log(error.message)
    }
}


  return (
    <>
    <div>AllArticles</div>
    <div style={{display: "flex",width:"90%", margin: "100px auto"}}>
    {articles?
    
    articles.map((item)=>{
     return <div onClick={()=>handleArticle(item)} key={item.id} 
            style={{cursor:"pointer" ,padding: "50px",margin:"10px" ,border: "2px solid black"}}>
            {item.title}
            </div>  
    }) :

    ""}
    </div>
    </>
  )
}
