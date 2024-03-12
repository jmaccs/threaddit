import React from 'react'
import { Link } from 'react-router-dom'


const ArticleGrid = ({allArticles}) => {
  return (
   
    
      <ul className='article-grid'>
      {allArticles.map(article =>{
        return (
          <li className='article-item'key={article.article_id}>
          
          <img className='article-image' src={article.article_img_url}/>
          <div className='article-text'>
            <Link to={`/articles/${article.article_id}`}>
            <h2>{article.title}</h2>
            </Link>
            <h3>By: {article.author}</h3>
            <h2>💄 {article.votes} | 🗣️ {article.comment_count} | 📅 {article.created_at.slice(0, 10)}</h2>
          
          </div>
          </li>
          
        )
      })}

  
    </ul>
  )
}

export default ArticleGrid