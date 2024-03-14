import { useState , React} from 'react'
import { postComment } from '../../utils/api'
import { useParams } from 'react-router-dom'

const PostComment = ({ articleId, onCommentSubmit }) => {
  const [username, setUsername] = useState('')
  const [comment, setComment] = useState('')


  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handleCommentChange = (event) => {
    setComment(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(username!== '' && comment!== '') {
      onCommentSubmit({"username": username,"body": comment})
      setComment('')
      setUsername('')
    }
  }

  return (
 
    <form className='post-comment-form' onSubmit={handleSubmit}>
      <input className='post-comment-input' type='text' placeholder='username' value={username} onChange={handleUsernameChange} />
      <input className='post-comment-input' type='text' placeholder='post a comment' value={comment} onChange={handleCommentChange} />
      <button className='post-comment-button'>Post</button>
    </form>
   
  )
}

export default PostComment

