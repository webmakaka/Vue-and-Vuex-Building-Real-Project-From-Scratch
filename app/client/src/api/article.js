import axios from '@/api/axios';

const getArticle = slug => {
  return axios.get(`/articles/${slug}`).then(response => response.data.article);
};

const deleteArticle = slug => {
  return axios.delete(`/articles/${slug}`);
};

export default {
  getArticle,
  deleteArticle
};
