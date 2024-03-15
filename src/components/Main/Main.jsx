import React, { useEffect, useState } from 'react'
import ArticleGrid from '../ArticleList/ArticleGrid'
import { getAllArticles } from '../../utils/api'
import Loading from '../../utils/Loading'
import {useParams} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import {handleError} from '../Toast/Toast'

const Main = () => {
  const [loading, setLoading] = useState(true)
  const [articles, setArticles] = useState([])
  const [sort, setSort] = useState('date,desc')
  const {topic} = useParams()

  
  useEffect(() =>{
    getAllArticles().then(res =>{
      let data = res.data.articles
      if(topic){
        data = data.filter(article => article.topic === topic)
      }
      if(data.length === 0){
        handleError('No articles found')
      }
      data.sort((a,b) =>{
        const [key, order] = sort.split(',')
        if(order === 'desc'){
          return b[key] - a[key]
        } else {
          return a[key] - b[key]
        }
      })
      setArticles(data)
      setLoading(false)
    }).catch(err => {
      handleError('No articles found', err)
    })
  }, [topic, sort])
  const handleSortChange = (e) => {
    setSort(e.target.value)
 }
  return (
    <div className='main-container'>
      <ToastContainer />
        <select className='sort-select' onChange={handleSortChange} placeholder='Sort by'>
        <option value=''>Sort by</option>
        <option value="date,desc" defaultChecked>Date (Newest)</option>
        <option value="date,asc">Date (Oldest)</option>
        <option value="comment_count,desc">Comment Count (High to Low)</option>
        <option value="comment_count,asc">Comment Count (Low to High)</option>
        <option value="votes,desc">Votes (High to Low)</option>
        <option value="votes,asc">Votes (Low to High)</option>
      </select>
      <hr className=''/>
    
        {loading ? <Loading /> : <ArticleGrid className='article-grid' articles={articles}/>}
        
    </div>
  )
}

export default Main