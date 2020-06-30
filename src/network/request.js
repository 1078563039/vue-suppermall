import axios from "axios";

/*最终版*/
export function request(data) {
  /*初始化axios实例*/
  const instance = axios.create({
    baseURL : "http://?/api/v1",
    // baseURL : "http://?/api/vip2",
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
    // console.log(config);
    return config;
  }, err => {
    // console.log(err);
  })

  instance.interceptors.response.use(result => {
    return result.data
    // return result;
  }, error => {
    console.log(error)
  })

  return instance(data);
}


/*Promise方式实现*/
/*export function request(data) {
  return new Promise((resolve, reject) => {
    /!*初始化axios实例*!/
    const instance = axios.create({
      baseURL: "",
      timeout: 5000
    })

    instance(data)
      .then(result => {
        resolve(result);
      })
      .catch(result => {
        reject(result);
      })
  })
}*/

/*回调函数方式实现*/
/*export function request(data, success, failure) {
  /!*初始化axios实例*!/
  const instance = axios.create({
    baseURL: "",
    timeout: 5000,
  })

  instance(data)
    .then(result => {
    console.log(result);
    success(result);
  }).catch(result => {
    console.log(result);
    failure(result);
  })
}*/
