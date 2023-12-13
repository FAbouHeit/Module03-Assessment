import React from 'react'

export default function Article({selectedArticle}) {
  return (
    <>
    <div>Article</div>
    <div style={{margin:"30px"}}>
    <p>
      title: {selectedArticle.title}
    </p>
    <p>
      category: {selectedArticle.category}
    </p>
    <p>
      body: {selectedArticle.body}
    </p>
    <p>
      author: {selectedArticle.author}
    </p>
    <p>
      imageURL: {selectedArticle.imageURL}
    </p>
    </div>
    </>
  )
}
