<template>
    <div>
        用户名：<input :value="name"> <br>
        密码：<input :value="pwd" type="password"> <br>
        <button @click="login">login</button>
    </div>
</template>

<script>
import { loginTest } from '../../api/login/index'
export default {
    name: 'Login', //组件名称
    data() {  //定义双向绑定数据
        return {
            name: '',
            pwd: '',
        }
    },
    methods: { //存放方法
        login(){
            const that = this
            const param = {
                name: that.name,
                pwd: that.pwd
            }
            loginTest(param).then(res=>{//请求成功

                console.log('loginTest=>err',res)//打印成功信息
                if(res.code === 0){
                    alert('登录成功')
                }else{
                    alert(res.code+res.msg)
                    //实际要看后端的提示语是否足够友好才能返回
                }
            },err=>{//请求失败
                console.log('loginTest=>err',err)//打印失败信息
            })
        }
    }
    
}
</script>

<style>

</style>