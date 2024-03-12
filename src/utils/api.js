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
