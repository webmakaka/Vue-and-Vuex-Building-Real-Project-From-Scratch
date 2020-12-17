import axios from '@/api/axios';

const getUserProfile = slug => {
  return axios.get(`/profiles/${slug}`).then(response => response.data.profile);
};

export default {
  getUserProfile
};
