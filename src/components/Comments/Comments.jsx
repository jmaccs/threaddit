import {React, useState, useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'
import PostComment from './PostComment'
import {getComments, postComment, deleteComment} from '../../utils/api'
import { handleError, handlePending, handleSuccess } from '../Toast/Toast'
import {UserContext} from '/src/context/User';


const Comments = ({articleId}) => {
    const [comments, setComments] = useState([])
    const {user} = useContext(UserContext)

    useEffect(() => {
      getComments(articleId).then((res) =>{
        
        const comments = res.data.comments
        setComments(comments)
      })
    }, [])
    const onCommentSubmit = (comment) => {
      if (!user){
        handleError("You must be logged in to post a comment.")
        return
      }
      handlePending("Posting comment...")
      postComment(comment, articleId).then((res)=>{
        const postedComment = res.data.comment
   
        setComments((comments) => {
          return [postedComment, ...comments]
        })
        handleSuccess("Comment posted!")
      }).catch((error) => {
        handleError("Error submitting - please try again.")
      })
    }
    const handleDeleteComment = (comment_id) => {
     
      handlePending("Deleting comment...")
      deleteComment(comment_id).then((res) => {
        setComments((comments) => {
          return comments.filter((comment) => comment.comment_id !== comment_id)
        })
      }).catch((error) => {
        handleError("Error deleting comment - please try again.")
      })
    }
  return (
    <div className='comments-parent'>
    <PostComment articleId={articleId} onCommentSubmit={onCommentSubmit}/>

    <ul >
    {comments.map((comment, index) => (
       <li className='comment-container' key={index}>
        <div className='comment-sidebar'>
       
        <p className='vote-arrow' >
          ⇧</p>
          {comment.votes}
          <p className='vote-arrow'>⇩</p>
        
    </div>
    <div className='comment-body'>{comment.body}</div>
    <div className='comment-footer'>
        {comment.author} &nbsp; | &nbsp; 
        {comment.created_at.slice(0, 10)} &nbsp;  {user === comment.author && <p className= 'delete-comment-button' onClick={() => handleDeleteComment(comment.comment_id)}>🗑️</p>}
    </div>
      </li>
    ))}
  </ul>
  </div>
  )
}

export default Comments




