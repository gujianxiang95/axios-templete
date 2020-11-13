import axios from 'axios' //引入axios

/*http请求方式 get post put delete
下面仅针对最常见的get post
实际开发中会因为传输的数据格式、请求头等等的不同，需要针对参数进行不同的设置（比如文件流、图片等等）
*/


  
/*
注意axios的get和post时，传递的参数格式是不一致的
get:
{
    params:请求参数
}
post直接就是请求参数 

*/
export const loginTest = (params)=>{ //export导出
     return axios.get('/dev-api/wind/users/login-test',{
        params
    })
}

export const login = (params)=>{
    return axios.post('/dev-api/wind/users/login-test',params)
}