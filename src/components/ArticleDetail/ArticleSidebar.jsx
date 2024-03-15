import React, { useState, useEffect, useContext } from 'react'
import { patchArticleVotes } from '../../utils/api'
import {UserContext} from '/src/context/User';
import { handleError, handlePending, handleSuccess } from '../Toast/Toast'


const ArticleSidebar = ({ article }) => {
    const [votes, setVotes] = useState(article.votes)
    const {user} = useContext(UserContext)

    useEffect(() => {
        setVotes(article.votes)
    }, [article.votes])

    const handleVote = (vote) => {
        if (!user){
            handleError("You must be logged in to vote.")
            return
        }
        const newVotes = votes + vote
        setVotes(newVotes)
        patchArticleVotes(vote, article.article_id).then((response) => {
            console.log(response)
        }).catch((error) => {
            handleError("Vote failed. Please try again.")
        })
    }

    return (
        <div className='article-sidebar'>
            <p className='vote-arrow' onClick={() => handleVote(1)}>⇧</p><br />{votes}<br /><p className='vote-arrow' onClick={() => handleVote(-1)}>⇩</p><br />
        </div>
    )
}

export default ArticleSidebar
