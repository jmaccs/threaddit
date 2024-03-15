import React, { useState, useEffect } from 'react'
import { getTopics } from '../../utils/api'
import { Link } from 'react-router-dom'

const Dropdown = () => {
    const [topics, setTopics] = useState([])

    useEffect(() => {
        getTopics().then((res) => {
          const topics = res.data.topics
          setTopics(topics)
        })
      }, [])
  return (
    <div className='dropdown-container'>
        
            <button className='dropdown-button'>
                 ⇩🧵⇩</button>
                <div className='dropdown-menu' > 
                    {topics.map((topic) => {
                        return <Link to={`/topics/${topic.slug}`} key={topic.slug}><h2>{topic.slug}</h2><br /></Link> 
                    })}
                    </div> 
                
            
            </div>
  )
}

export default Dropdown