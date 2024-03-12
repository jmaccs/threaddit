import React, { useEffect, useState } from 'react'
import FeaturedPosts from '../FeaturedPosts/FeaturedPosts'
import ArticleGrid from '../ArticleList/ArticleGrid'
import { getAllArticles } from '../../utils/api'



const Main = () => {
  const [loading, setLoading] = useState(true)
  const [allArticles, setAllArticles] = useState([])

  useEffect(() =>{
    getAllArticles().then(res =>{
      const data = res.data.articles
      setAllArticles(data)
      setLoading(false)
    })
  }, [])
  return (
    <div>

        <FeaturedPosts />
        <ArticleGrid className='article-grid' allArticles={allArticles}/>
    </div>
  )
}

export default Main