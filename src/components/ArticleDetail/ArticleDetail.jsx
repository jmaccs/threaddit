import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import React from 'react'
import { getArticle } from '../../utils/api'
import Loading from '../../utils/Loading'
import Comments from '../Comments/Comments'
import ArticleSidebar from './ArticleSidebar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
  const handleApiError = (error) => {
    toast.error(error, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  const handleSubmitSuccess = (message) => {
    toast.success(message, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  const handlePending = (message) => {
    toast.info(message, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <div className='article-comments-parent'>
      <ToastContainer />
    <div className='article-detail-container'>
      <ArticleSidebar article={article} handleApiError={handleApiError}/>
      {isLoading ? <Loading /> : <>  <article className='article-detail'>
    <h2>{article.title} <br /> by {article.author}</h2>
      <div className='img-large-container'>
      <img className='img-large' src={article.article_img_url} alt={article.title} />
      <div className='img-large-text'>
        #{article.topic}
      </div>  
      </div>
      <p>{article.body}</p>
    </article></>}
    </div>
    <Comments articleId={id} handleApiError={handleApiError} handlePending={handlePending} handleSubmitSuccess={handleSubmitSuccess}/>
    </div>
   
    
  )
}

export default ArticleDetail