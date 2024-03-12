import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import React from 'react'
import { getArticle } from '../../utils/api'
import CommentBox from './PostComment'


const ArticleDetail = () => {
  const [article, setArticle] = useState({})
  const {id} = useParams()
  useEffect(() =>{
    getArticle(id).then((res) =>{
      const article = res.data.article
      console.log(res);
      setArticle(article)
    })
  }, [id])

  return (
    <>
    <div className='article-detail-container'>
    <article className='article-detail'>
    <h2>{article.title} <br /> by {article.author}</h2>
      <div className='img-large-container'>
      <img className='img-large' src={article.article_img_url} alt={article.title} />
      <div className='img-large-text'>
        #{article.topic}
      </div>  
      </div>
      <p>{article.body}</p>
    </article>
    </div>
    <div className='comment-box-container'>
    <CommentBox article={article}/>
    </div>

    </>
  )
}

export default ArticleDetail