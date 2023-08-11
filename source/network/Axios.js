import axios from 'axios';
import {serverPath} from './serverConfig';
var config = {
  baseUrl: serverPath,
};

const base = async param => {
  const CancelToken = axios.CancelToken;
  let source = CancelToken.source();
  setTimeout(() => {
    source.cancel();
  }, 10000);

  return await axios({
    method: param.method,
    baseURL: config.baseUrl,
    url: param.url,
    cancelToken: source.token,
    data: param.data,
  })
    .then(res => {
      return Promise.resolve(res);
    })
    .catch(err => {
      if (err.response) {
        return Promise.reject(err.response);
      } else {
        return Promise.reject('TIMEOUT');
      }
    });
};

const request = async (method, url) => {
  return await base({method, url})
    .then(res => Promise.resolve(res))
    .catch(err => Promise.reject(err));
};

export default {
  request,
};
