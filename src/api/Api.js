/**
 * Created by Dell on 2018/3/5.
 */
import Axios from 'axios';

export default {
  get (url, params) {
    console.log(url)
    return new Promise((resolve, reject) => {
      Axios.get(url, {params: params})
        .then(response => {
          resolve(response);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  post (url, params) {
    console.log(url)
    return new Promise((resolve, reject) => {
      Axios.post(url, params)
        .then(response => {
          resolve(response);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};
