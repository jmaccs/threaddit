import React from 'react'
import { Link } from 'react-router-dom'
import Loading from '../../utils/Loading'

const ArticleGrid = ({allArticles}) => {
  return (
   

      <ul className='article-grid'>
      {allArticles.map(article =>{
        return (
          <li className='article-item'key={article.article_id}>
          <div className ='article-image-container'>
          <img className='article-image' src={article.article_img_url}/>
          <div className='article-image-text'>
            {article.topics}
          </div>
          </div>
          <div className='article-text'>
            <Link to={`/articles/${article.article_id}`}>
            <h2>{article.title}</h2>
            </Link>
            <h3>By: {article.author}</h3>
            <p>💄 {article.votes} | 🗣️ {article.comment_count} <p>📅 {article.created_at.slice(0, 10)}</p></p> 
          
          </div>
          </li>
          
        )
      })}

  
    </ul>
  )
}

export default ArticleGrid