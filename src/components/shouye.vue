<template>
  <div id="aa">
    <div class="dao">
      <div class="h2">
        <img src="../assets/h1.png" />
      </div>
      <div class="h3">
        <span @click="shou('/shouye/zhuye')">内容管理</span>
      </div>
      <div class="h3">
        <span>系统设置</span>
      </div>
      <div class="xi1">
        <div class="nei1">
<div class="li1">
  <div>账户信息</div>
  <div>修改密码</div>
</div>
<div class="li2">
<div>登录用户：admin</div>
<div>上次登录：2018-4-28 18：00：00</div>
<div>登录地区：广东省 广州市 （IP：183.18.18.31）</div>
</div>
        </div>
 <div class="el-icon-user-solid"></div>
      <div class="h4">admin</div>
      </div>
     <div class="xi2">
       <div class="nei2">
         <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="业务消息"  name="first">
      <div class="li3"><p class="li5">【审核通知】您有一笔采购单待审核</p><p class="li5">2018-04-28 09:18:00</p></div>
      <div class="li3"><p class="li5">【审核通知】您有一笔采购单待审核</p><p class="li5">2018-04-28 09:18:00</p></div>
      <div class="li3"><p class="li5">【审核通知】您有一笔采购单待审核</p><p class="li5">2018-04-28 09:18:00</p></div>
      <div class="li3"><p class="li5">【审核通知】您有一笔采购单待审核</p><p class="li5">2018-04-28 09:18:00</p></div>
      <div class="li3"><p class="li5">【审核通知】您有一笔采购单待审核</p><p class="li5">2018-04-28 09:18:00</p></div>
      <div class="li4">查看全部</div>
    </el-tab-pane>
    <el-tab-pane label="系统公告" name="second">
       <div class="li3"><p class="li5">花生米：商品管理功能培训</p><p class="li5">2018-04-28 09:18:00</p></div>
      <div class="li3"><p class="li5">花生米：商品管理功能培训</p><p class="li5">2018-04-28 09:18:00</p></div>
      <div class="li3"><p class="li5">花生米：商品管理功能培训</p><p class="li5">2018-04-28 09:18:00</p></div>
      <div class="li3"><p class="li5">花生米：商品管理功能培训</p><p class="li5">2018-04-28 09:18:00</p></div>
      <div class="li3"><p class="li5">花生米：商品管理功能培训</p><p class="li5">2018-04-28 09:18:00</p></div>
      <div class="li4">查看全部</div>
    </el-tab-pane>
    <el-tab-pane label="升级公告" name="third">
       <div class="li3"><p class="li5">花生米（2018-04-28）预发布公告</p><p class="li5">2018-04-28 09:18:00</p></div>
      <div class="li3"><p class="li5">花生米（2018-04-28）预发布公告</p><p class="li5">2018-04-28 09:18:00</p></div>
      <div class="li3"><p class="li5">花生米（2018-04-28）预发布公告</p><p class="li5">2018-04-28 09:18:00</p></div>
      <div class="li3"><p class="li5">花生米（2018-04-28）预发布公告</p><p class="li5">2018-04-28 09:18:00</p></div>
      <div class="li3"><p class="li5">花生米（2018-04-28）预发布公告</p><p class="li5">2018-04-28 09:18:00</p></div>
      <div class="li4">查看全部</div>
    </el-tab-pane>
    <el-tab-pane label="全部消息" name="fourth"></el-tab-pane>
  </el-tabs>
       </div>
 <div class="el-icon-message-solid"> </div>
<el-badge :value="4" class="item">
  </el-badge>
     </div>
 
      
      <div class="el-icon-s-operation">
              <div class="nei3">
<div class="li6">
  <div>快捷菜单</div>
  <div>添加/设置</div>
</div>
<div class="li7">
  <div class="kucun1"><el-link :underline="false">商品档案</el-link></div>
<div class="kucun1"><el-link :underline="false">商品库存</el-link></div>
<div class="kucun1"><el-link :underline="false">商品库存明细</el-link></div>
<div class="fudong"></div>
<div class="kucun2"><el-link :underline="false">终端销售交易明细</el-link></div>
<div class="kucun2"><el-link :underline="false">终端财务收银明细</el-link></div>
<div class="fudong"></div>
</div>
        </div>
      </div>
      <div class="el-icon-s-home"></div>
      <div class="el-icon-switch-button"></div>
    </div>




   <!--导航-->
    <div class="q1">
      <el-row class="tac">
        <el-col :span="4" class="q2">

          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-s-open"></i>
                <span>商品</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1" @click="toPath('/shouye/buju')">商品类别</el-menu-item>
                <el-menu-item index="1-2" @click="toPath('/shouye/buju2')">商品品牌</el-menu-item>
                <el-menu-item index="1-3">商品单位</el-menu-item>
                <el-menu-item index="1-4">商品编码设置</el-menu-item>
                <el-menu-item index="1-5">商品档案</el-menu-item>
                <el-menu-item index="1-6">图片库管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-shopping-cart-2"></i>
                <span>采购</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">供应商管理</el-menu-item>
                <el-menu-item index="2-2">采购单</el-menu-item>
                <el-menu-item index="2-3">采购退货单</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-present"></i>
                <span>库存</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1">商品入库</el-menu-item>
                <el-menu-item index="3-2">库存调拨</el-menu-item>
                <el-menu-item index="3-3">商品出库</el-menu-item>
                <el-menu-item index="3-4">库存盘点</el-menu-item>
                <el-menu-item index="3-5">商品库存</el-menu-item>
                <el-menu-item index="3-6">商品库存明细</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-box"></i>
                <span>促销</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="4-1">订单销售</el-menu-item>
                <el-menu-item index="4-2">商品促销</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-paperclip"></i>
                <span>零售</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="5-1">终端销售单</el-menu-item>
                <el-menu-item index="5-2">终端退货单</el-menu-item>
                <el-menu-item index="5-3">商场销售单</el-menu-item>
                <el-menu-item index="5-4">终端销售交易明细</el-menu-item>
                <el-menu-item index="5-5">终端财务收银明细</el-menu-item>
                <el-menu-item index="5-6">终端销售交易汇总</el-menu-item>
                <el-menu-item index="5-7">终端财务收银汇总</el-menu-item>
                <el-menu-item index="5-8">终端财务退款汇总</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="6">
              <template slot="title">
                <i class="el-icon-notebook-2"></i>
                <span>会员</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="6-1">会员类别</el-menu-item>
                <el-menu-item index="6-2">会员列表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>


        <el-col :span="20" >
          <router-view></router-view>
           </el-col>
      </el-row>

       
          
        

    </div>
  </div>
</template>
<script>
export default {

   data() {
      return {
        activeName: 'second'
      };
    },
  methods: {
    
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    toPath(val){
      this.$router.push({
        path:val
      })
    },
    shou(va2){
      this.$router.push({
        path:va2
      })
    },
      handleClick(tab, event) {
        console.log(tab, event);
      }
  }
};
</script>
<style  scoped>

.kucun2{
  float: left;
  margin-left: 30px;
}
.kucun1{
  float: left;
  margin-left: 40px;
}
.fudong{
  clear: both;
}
.nei3{
  display: none;
z-index: 1;
background-color: white;
  position: absolute;
  top: 50px;
  left: -150px;
  width: 340px;
  height: 166px;
  border: 1px white solid;
  box-shadow: 0px 0px 3px;
}
.li7{
float: left;
width: 100%;
font-size: 14px;
}
.li6{
  width: 100%;
  height: 50px;
  background-color: #e8f2ff;
  float: left;
}
.li6>div:nth-child(1){
  
  margin-left: 10px;
  float: left;
  color: black;
  font-weight: bold;
  font-size: 14px;
}
.li6>div:nth-child(2){
  
  margin-right: 10px;
  float: right;
  font-size: 14px;
  font-weight: bold;
  color: #007cff;
}
.li4{
margin-left: 140px;
margin-top: 20px;
color: #666666;
font-size: 14px;
}
.li4:hover{
  color:#0066ff ;
  cursor: pointer;
}
.li3:hover .li5{
  color:#0066ff ;
  cursor: pointer;
}
.li3{
  margin-left: 30px;
  margin-top: 15px;
}
.li3>p{
  font-size: 14px;
  color: #666666;
}
.xi2:hover .nei2{
  display: block;
}
.nei2{
  z-index: 1;
  display: none;
  position: absolute;
  top: 50px;
  left: -100px;
   width: 340px;
  height: 376px;
 background-color: white;
  border: 1px white solid;
  box-shadow: 0px 0px 3px;
}
.li2{
float: left;
width: 100%;
font-size: 14px;
}
.li2>div:nth-child(1){
  margin-left: 10px;
  margin-top: 10px;
}
.li2>div:nth-child(2){
  margin-left: 10px;
  margin-top: 10px;
}
.li2>div:nth-child(3){
  margin-left: 10px;
  margin-top: 10px;
}
.li1{
  width: 100%;
  height: 50px;
  background-color: #e8f2ff;
  float: left;
}
.li1>div:nth-child(1){
  margin-top: 20px;
  margin-left: 10px;
  float: left;
  font-weight: bold;
  font-size: 14px;
}
.li1>div:nth-child(2){
  margin-top: 20px;
  margin-right: 10px;
  float: right;
  font-size: 14px;
  font-weight: bold;
  color: #007cff;
}
.nei1{
  z-index: 1;
  display: none;
  position: absolute;
   background-color: white;
  top: 50px;
  width: 340px;
  height: 166px;
  border: 1px white solid;
  box-shadow: 0px 0px 3px;
}
.xi1:hover .nei1{
  display: block;
}
.xi2{
  position: relative;
  width: 60px;
  height: 50px;
  
  
  float: left;
}
.item {
position: absolute;
top: 3px;
left: 34px;

}
#aa >>> .el-badge__content{
  background-color: red;
  border:solid 1px red;
}
.xi1{
  position: relative;
  float: left;
  margin-left: 600px;
  width: 100px;
  height: 50px;
}
.xi1:hover{
  background-color: #3f8cff;
}
.xi2:hover{
  background-color: #3f8cff;
}

.dao {
  width: 100%;
  height: 50px;
  background-color: #0066ff;
}
.h2 {
  float: left;
  margin-left: 40px;
  margin-top: 5px;
  width: 130px;
  height: 40px;
}
.h2 > img {
  width: 100%;
  height: 100%;
}
.h3 {
  margin-left: 20px;
  text-align: center;
  line-height: 50px;
  float: left;
  color: white;
  width: 80px;
  height: 50px;
}
.el-icon-user-solid {
  float: left;
  margin-left: 10px;
  line-height: 50px;
  font-size: 25px;
  color: white;
}
.h4 {
  line-height: 50px;
  float: left;
  margin-left: 5px;
  color: white;
  font-size: 13px;
}
.el-icon-message-solid {
  color: white;
  font-size: 22px;
  line-height: 50px;
 margin-left: 20px;
  float: left;
  
}
.el-icon-s-operation {
  position: relative;
  width: 60px;
  height: 50px;
  color: white;
  font-size: 20px;
  line-height: 50px;
  text-align: center;
  float: left;
  
}
.el-icon-s-operation:hover .nei3{
  display: block;
}
.el-icon-s-operation:hover{
  background-color:#3f8cff ;
}
.el-icon-switch-button {
  width: 60px;
  height: 50px;
  text-align: center;
  color: white;
  font-size: 20px;
  line-height: 50px;
  float: left;
  
}
.el-icon-s-home {
  width: 60px;
  height: 50px;
  color: white;
  font-size: 20px;
  line-height: 50px;
   text-align: center;
  float: left;
  
}
.el-icon-s-home:hover{
  background-color:#3f8cff ;
}
.el-icon-switch-button:hover{
  background-color:#3f8cff ;
}
</style>