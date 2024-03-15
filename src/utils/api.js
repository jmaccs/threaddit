import axios from "axios";



const threadditApi = axios.create({
  baseURL: "https://news-crush.onrender.com/api",
});

export const getAllArticles = () => {
  return threadditApi
    .get("/articles")
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
};

export const getArticle = (id) => {
  return threadditApi
    .get(`/articles/${id}`)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
};

export const getComments = (id) => {
  return threadditApi.get(`/articles/${id}/comments`).then((response) => response).catch((error) => {
    throw error
  })
}

export const patchArticleVotes = ( vote, id) => {
  const voteBody = { inc_votes: vote };
  return threadditApi.patch(`/articles/${id}`, voteBody).then((response) => response).catch((error) => {
    throw error
  })
}

export const postComment = (comment, id) => {
  console.log(id);
  return threadditApi.post(`/articles/${id}/comments`, comment).then((response) => response).catch((error) => {
    throw error
  })
}
export const deleteComment = (comment_id) => {
  return threadditApi.delete(`/comments/${comment_id}`).then((response) => response).catch((error) => {
    throw error
  })
}
export const getTopics = () => {
  return threadditApi.get('/topics').then((response) => response).catch((error) => {
    throw error
  })
}

// export const getItem = (itemId) => {
//   return marketplaceApi.get(`/items/${itemId}`)
//     .then(response => response)
//     .catch(error => { throw error; });
// };

// export const postItem = (itemData) =>{
//   return marketplaceApi.post('/items', itemData).then(res =>{
//     console.log(res.data);
//   }).catch((err) =>{
//     console.log(err, 'POST err')
//   })
// }
