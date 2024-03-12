import {React, useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {getComments} from '../../utils/api'

const Comments = () => {
    const [comments, setComments] = useState([])
    const {id} = useParams()
    useEffect(() => {
      getComments(id).then((res) =>{
        const comments = res.data.comments
        console.log(comments);
        setComments(comments)
      })
    }, [])
  return (
    <div className='comment-container'>
        <ul>
          {comments.map((comment) => {
            return <li className='comment-item' key={comment.comment_id}>
              <p className='comment-body'>{comment.body}</p>
              <hr />
              <h4>
              Author: {comment.author}|     
              {comment.created_at.slice(0, 10)}|
              {comment.votes}👏</h4>
            </li>
          })}
        </ul>
    </div>
  )
}

export default Comments

