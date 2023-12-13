import React, { useState } from 'react'

export default function Edit({selectedArticle}) {

let [form, setForm] = useState({
    title : selectedArticle.title,
    category: selectedArticle.category,
    body: selectedArticle.body,
    author: selectedArticle.author,
    imageURL: selectedArticle.imageURL
});
    const handleSubmit =()=>{
        setForm = {}
    }

    const handlechange=(e, name)=>{

    }

  return (
    <>
    <div>Edit Article</div>
    <div style={{margin:"30px"}}>
    
    <form noValidate onSubmit={handleSubmit()}>
        <input type='text' value={selectedArticle.title} onChange={(e)=>{setForm({...form, title: e.target.value})}}>
        {/* title: {selectedArticle.title} */}
        </input>
        <input type='text' value={selectedArticle.category} onChange={(e)=>{setForm({...form, category: e.target.value})}}>
        {/* category: {selectedArticle.category} */}
        </input>
        <input type='text' value={selectedArticle.body} onChange={(e)=>{setForm({...form, body: e.target.value})}}>
        {/* body: {selectedArticle.body} */}
        </input>
        <input type='text' value={selectedArticle.author} onChange={(e)=>{setForm({...form, author: e.target.value})}}>
        {/* author: {selectedArticle.author} */}
        </input>
        <input type='text' value={selectedArticle.imageURL} onChange={(e)=>{setForm({...form, imageURL: e.target.value})}}>
        {/* imageURL: {selectedArticle.imageURL} */}
        </input>
        <button type='submit'></button>
    </form>
    </div>
    
    </>
  )
}
