import axiosClient from './axiosClient';

const menuApi = {
  getAll() {
    const url = '/menu';
    return axiosClient.post(url);
  },
};

export default menuApi;
