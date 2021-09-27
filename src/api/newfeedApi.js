import axiosClient from './axiosClient';

const newfeedApi = {
  getAll() {
    const url = '/news/newsfeed';
    return axiosClient.get(url);
  },
};

export default newfeedApi;
