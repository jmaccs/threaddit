import {React, useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import PostComment from './PostComment'
import {getComments, postComment} from '../../utils/api'


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
      console.log("comment is ->",JSON.stringify(comment), "article id is ->", articleId)
      postComment(comment, articleId).then((res)=>{
        const postedComment = res.data.comment
   
        setComments((comments) => {
          return [postedComment, ...comments]
        })
        handleSubmitSuccess("Comment posted!")
      }).catch((error) => {
        console.log(error)
        handleApiError("Error submitting - please try again.")
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
        {comment.created_at.slice(0, 10)}
    </div>
      </li>
    ))}
  </ul>
  </div>
  )
}

export default Comments




