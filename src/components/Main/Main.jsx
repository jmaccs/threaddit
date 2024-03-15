import React, { useEffect, useState } from 'react'
import FeaturedPosts from '../FeaturedPosts/FeaturedPosts'
import ArticleGrid from '../ArticleList/ArticleGrid'
import { getAllArticles } from '../../utils/api'
import Loading from '../../utils/Loading'
import {useParams} from 'react-router-dom'


const Main = () => {
  const [loading, setLoading] = useState(true)
  const [articles, setArticles] = useState([])
  const {topic} = useParams()

  useEffect(() =>{
    getAllArticles().then(res =>{
      const data = res.data.articles
      if(topic){
        const filteredData = data.filter(article => article.topic === topic)
        setArticles(filteredData)
      } else {
        setArticles(data)
      }
      setLoading(false)
    })
  }, [topic])

  return (
    <div>

    
        {loading ? <Loading /> : <ArticleGrid className='article-grid' articles={articles}/>}
        
    </div>
  )
}

export default Main