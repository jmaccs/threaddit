import React from 'react'

const PostComment = ({ article }) => {
  return (
    <form className='post-comment-form'>
      <input className='post-comment-input' type='text' />
      <button className='post-comment-button'>Post Comment</button>
    </form>
  )
}

export default PostComment

