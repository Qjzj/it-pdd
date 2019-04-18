import axios from 'axios'

export default function ajax (url='', params={}, type="GET") {
  let promise;
  return new Promise((resolve, reject)=> {
    if(type === 'GET') {
      //  拼接数据
      let paramsStr = '';
      Object.keys(params).forEach(key =>{
        paramsStr += key + '=' + params[key] + '&'
      });
      // 去除最后一个&
      if(paramsStr !== '') {
        paramsStr = paramsStr.substr(0,paramsStr.lastIndexOf('&'));
      }

      // 拼接完整的url
      url +=  "?" + paramsStr;

      promise = axios.get(url);
    }else if('POST' === type) {
      promise = axios.post(url,params);
    }

    promise.then(function(response) {
      resolve(response.data)
    }).catch(err => {
      reject(err)
    })
  })
} ;