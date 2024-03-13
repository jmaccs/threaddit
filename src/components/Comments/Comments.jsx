import {React, useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {getComments} from '../../utils/api'

const Comments = () => {
    const [comments, setComments] = useState([])
    
    const {id} = useParams()
    useEffect(() => {
      getComments(id).then((res) =>{
        const comments = res.data.comments
        setComments(comments)
      })
    }, [])
  return (
 
        <ul className='comment-container'>
          {comments.map((comment) => {
            return <><li className='comment-statbar' key={comment.comment_id}>
             
              
              <h4><br />
              <button>⇧</button><br />{comment.votes}<br /><button>⇩</button><br />
              {comment.author}<br />     
              {comment.created_at.slice(0, 10)}<br />
              
              </h4>
            </li>
            <div className='comment-body'>{comment.body}</div>
            </>
          })}
        </ul>
   
  )
}

export default Comments

