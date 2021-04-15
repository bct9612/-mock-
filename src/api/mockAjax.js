import axios from 'axios'

import NProgress from 'nprogress' //默认找的就是nprogress.js
import 'nprogress/nprogress.css'


const service  = axios.create({
    baseURL:'/mock',
    timeout:2000
})
service.interceptors.request.use(
    config=>{
        NProgress.start()
        return config
    }
)
service.interceptors.response.use(
    response=>{
        NProgress.done()
        return response.data
    },
    err=>{
        alert('请求失败'+err.message||'未知错误')
    }
)



export default service