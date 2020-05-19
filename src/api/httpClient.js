import axios from 'axios';

export const get = (url, headers) => {
  return axios.get(url, headers);
}

export const post = (url, data, headers) => {
  return axios.post(url, data, headers);
}

export const deleteItem = (url, id) => {
  return axios.delete(url, id);
}

// export const postWithAuth = (url, data, headers) => {
//   headers = {...headers, ...{ Authorization: localStorage.getItem('token') }};
//   return axios.post(url, data, headers);
// }