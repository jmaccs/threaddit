import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import React from 'react'
import { getArticle } from '../../utils/api'
import Loading from '../../utils/Loading'
import Comments from '../Comments/Comments'


const ArticleDetail = () => {
  const [article, setArticle] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const {id} = useParams()
  useEffect(() =>{
    getArticle(id).then((res) =>{
      const article = res.data.article
      setArticle(article)
      setIsLoading(false)
    })
  }, [id])

  return (
    <>

    <div className='article-detail-container'>
      {isLoading ? <Loading /> : <article className='article-detail'>
    <h2>{article.title} <br /> by {article.author}</h2>
      <div className='img-large-container'>
      <img className='img-large' src={article.article_img_url} alt={article.title} />
      <div className='img-large-text'>
        #{article.topic}
      </div>  
      </div>
      <p>{article.body}</p>
    </article>}
    
    
   

    <Comments />
   
    </div>
    </>
  )
}

export default ArticleDetail