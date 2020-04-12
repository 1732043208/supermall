import axios from 'axios'

export function request(config) {
  //1.创建axios的实例
  const instance = axios.create({

    baseURL: 'http://152.136.185.210:8000/api/h8',
    timeout: 5000
  })

  // 2.axios的拦截器
  // 拦截成功后一定要把参数return回去
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })
0
  //2.2.响应拦截
  instance.interceptors.response.use(res => {
    console.log(res);
    return res.data
  }, err => {
    console.log(err);
  })

  //3.发送真正的网络请求
  return instance(config)
}
