import {React, useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import PostComment from './PostComment'
import {getComments, postComment, deleteComment} from '../../utils/api'


const Comments = ({articleId, handlePending,handleApiError, handleSubmitSuccess}) => {
    const [comments, setComments] = useState([])
   

    useEffect(() => {
      getComments(articleId).then((res) =>{
        
        const comments = res.data.comments
        setComments(comments)
      })
    }, [])
    const onCommentSubmit = (comment) => {
      handlePending("Posting comment...")
      postComment(comment, articleId).then((res)=>{
        const postedComment = res.data.comment
   
        setComments((comments) => {
          return [postedComment, ...comments]
        })
        handleSubmitSuccess("Comment posted!")
      }).catch((error) => {
        handleApiError("Error submitting - please try again.")
      })
    }
    const handleDeleteComment = (comment_id) => {
      handlePending("Deleting comment...")
      deleteComment(comment_id).then((res) => {
        setComments((comments) => {
          return comments.filter((comment) => comment.comment_id !== comment_id)
        })
      }).catch((error) => {
        handleApiError("Error deleting comment - please try again.")
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
        {comment.created_at.slice(0, 10)} &nbsp;   <p className= 'delete-comment-button' onClick={() => handleDeleteComment(comment.comment_id)}>🗑️</p>
    </div>
      </li>
    ))}
  </ul>
  </div>
  )
}

export default Comments




