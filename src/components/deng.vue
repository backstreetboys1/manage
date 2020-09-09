<template>
  <div class="home">
    
<div class="k1">账号<input type="text" v-model="number"></div>
    <div class="k2">密码<input type="text" v-model="pwd"></div>
    
    
    <div class='but' @click="login">登录</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
     number:"admin",
     pwd:"admin"
    }
  },
methods:{
    login(){
 axios.post("http://139.9.169.87:8081/examsystem/login?username=admin&password=admin")
 .then(res=>{
     console.log(res)
localStorage.setItem("token", res.data.data.token)
this.$router.push('/shouye/zhuye')
 })
 .catch(err=>{
     console.log(err)
 })
    } 
}
};
</script>
<style lang='scss' scoped>
.but{
  text-align: center;
  line-height: 50px;
  height: 50px;
    
    background:blue;
    color:#fff;
    width: 100px;
   margin-left: 150px;
   margin-top: 30px;
    border-radius: 20px;
}
.but:hover{
 
  cursor: pointer;
}
.home{
  background-color: burlywood;
  width: 30%;
  height: 300px;
  margin-left: 30%;
}
.k1{
margin-left: 100px;
margin-top: 20px;
}
.k2{
margin-left: 100px;
margin-top: 0px;
}

</style>
