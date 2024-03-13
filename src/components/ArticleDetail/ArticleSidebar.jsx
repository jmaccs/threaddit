import React, { useState, useEffect } from 'react'
import { patchArticleVotes } from '../../utils/api'

const ArticleSidebar = ({ article, handleApiError }) => {
    const [votes, setVotes] = useState(article.votes)

    useEffect(() => {
        setVotes(article.votes)
    }, [article.votes])

    const handleVote = (vote) => {
        const newVotes = votes + vote
        setVotes(newVotes)
        patchArticleVotes(vote, article.article_id).then((response) => {
            console.log(response)
        }).catch((error) => {
            handleApiError("Vote failed. Please try again.")
        })
    }

    return (
        <div className='article-sidebar'>
            <p className='vote-arrow' onClick={() => handleVote(1)}>⇧</p><br />{votes}<br /><p className='vote-arrow' onClick={() => handleVote(-1)}>⇩</p><br />
        </div>
    )
}

export default ArticleSidebar
