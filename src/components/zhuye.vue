<template>
  <div class="q1">
      
      <div class="daohang">
          <div class="qian"></div>
<div class="biao">首页</div>
      </div>
      <div class="zhuti">
<div class="zhu1">
<div class="zhu2"><img src="../assets/c1.png" alt=""></div>
<div class="zhu3">
<div>欢迎您</div><div>商户ID</div><div>有效期至</div><div>操作门店</div><div></div>
<div>十月大神</div><div>66668888</div><div>2018-05-18</div><div>产品大神（幸福店）</div>
</div>

</div>
<div class="kk1">
    <div>待处理事务</div><div></div>
<div><el-link :underline="false">采购待审核</el-link></div>
<div><el-link :underline="false">采购退货待审核</el-link></div>
<div><el-link :underline="false">入库待审核</el-link></div>
<div></div>
<div><el-link :underline="false">出库待审核</el-link></div>
<div><el-link :underline="false">调拨待审核</el-link></div>
<div><el-link :underline="false">盘点待审核</el-link></div>
<div></div>
<div><el-link :underline="false">订单促销待审核</el-link></div>
<div><el-link :underline="false">商品促销待审核</el-link></div>
<div>--</div>
</div>

<div class="kk2">
    <div>快捷菜单</div><div></div>
<div><el-link :underline="false">商品档案</el-link></div>
<div><el-link :underline="false">商品库存</el-link></div>
<div><el-link :underline="false">商品库存明细</el-link></div>
<div></div>
<div><el-link :underline="false">终端销售交易</el-link></div>
<div><el-link :underline="false">终端财务收银</el-link></div>
<div><el-link :underline="false">终端交易汇总</el-link></div>
<div></div>
<div><el-link :underline="false">终端财务收</el-link></div>
<div><el-link :underline="false">商品促销待审核</el-link></div>
<div>--</div>
</div>

<div id="kk3">

</div>
<div id="kk4">

</div>
<div id="kk5">

</div>
<div id="kk6">

</div>
      </div>
     
  </div>
</template>

<script> 
export default {

methods: {
    drawChart() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("kk3"));
      // 指定图表的配置项和数据
     let option = {
    title: {
        text: '采购单汇总',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['已入库', '待审核', '审核失败', '已作废', '部分入库']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                {value: 335, name: '已入库'},
                {value: 310, name: '待审核'},
                {value: 234, name: '审核失败'},
                {value: 135, name: '已作废'},
                {value: 1548, name: '部分入库'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },

 Chart() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("kk4"));
      // 指定图表的配置项和数据
     let option = {
    title: {
        text: '采购退款单汇总',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['已入库【审核成功】', '待审核', '审核失败', '已作废', '部分入库']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                {value: 1548, name: '已入库【审核成功】'},
                {value: 135, name: '待审核'},
                {value: 234, name: '审核失败'},
                {value: 310, name: '已作废'},
                {value: 335, name: '部分入库'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    art() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("kk5"));
      // 指定图表的配置项和数据
     let option = {
    title: {
        text: '销售金额统计'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['销售收入', '销售金额', '销售成本', '销售本金', '商城销售']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
     rt() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("kk6"));
      // 指定图表的配置项和数据
     let option = {
          title: {
        text: '交易订单统计'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {}
    }]
};

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }

  },
  mounted() {
    this.drawChart();
    this.Chart();
    this.art();
    this.rt();
  }
}




</script>

<style  scoped>
#kk3{
    float: left;
    width: 47%;
    margin-left: 2.5%;
    margin-top: 10px;
    height: 300px;
    border: 1px solid #e4e4e4;
}
#kk4{
    float: left;
    width: 45.3%;
    margin-left: 2.5%;
    margin-top: 10px;
    height: 300px;
    border: 1px solid #e4e4e4;
}
.kk2>div:nth-child(1){
margin-top: 20px;
margin-left: 15px;
float: left;
font-size: 14px;
font-weight: bold;

}
.kk2>div:nth-child(2){
    clear: both;
}
.kk2>div:nth-child(3){
    margin-top: 20px;
    margin-left: 20px;
    float: left;
}
.kk2>div:nth-child(4){
    margin-top: 20px;
    margin-left: 80px;
    float: left;
}
.kk2>div:nth-child(5){
    margin-top: 20px;
    margin-left: 80px;
    float: left;
}
.kk2>div:nth-child(6){
    clear: both;
}
.kk2>div:nth-child(7){
      margin-top: 20px;
    margin-left: 20px;
    float: left;
}
.kk2>div:nth-child(8){
      margin-top: 20px;
    margin-left: 90px;
    float: left;
}
.kk2>div:nth-child(9){
      margin-top: 20px;
    margin-left: 100px;
    float: left;
}
.kk2>div:nth-child(10){
    clear: both;
     
}
.kk2>div:nth-child(11){
 margin-top: 20px;
    margin-left: 20px;
    float: left;
}
.kk2>div:nth-child(12){
     margin-top: 20px;
    margin-left: 50px;
    float: left;
}
.kk2>div:nth-child(13){
    margin-top: 20px;
    margin-left: 110px;
    float: left;
}

.kk1>div:nth-child(1){
margin-top: 20px;
margin-left: 15px;
float: left;
font-size: 14px;
font-weight: bold;

}
.kk1>div:nth-child(2){
    clear: both;
}
.kk1>div:nth-child(3){
    margin-top: 20px;
    margin-left: 20px;
    float: left;
}
.kk1>div:nth-child(4){
    margin-top: 20px;
    margin-left: 80px;
    float: left;
}
.kk1>div:nth-child(5){
    margin-top: 20px;
    margin-left: 80px;
    float: left;
}
.kk1>div:nth-child(6){
    clear: both;
}
.kk1>div:nth-child(7){
      margin-top: 20px;
    margin-left: 20px;
    float: left;
}
.kk1>div:nth-child(8){
      margin-top: 20px;
    margin-left: 90px;
    float: left;
}
.kk1>div:nth-child(9){
      margin-top: 20px;
    margin-left: 100px;
    float: left;
}
.kk1>div:nth-child(10){
    clear: both;
     
}
.kk1>div:nth-child(11){
 margin-top: 20px;
    margin-left: 20px;
    float: left;
}
.kk1>div:nth-child(12){
     margin-top: 20px;
    margin-left: 50px;
    float: left;
}
.kk1>div:nth-child(13){
    margin-top: 20px;
    margin-left: 110px;
    float: left;
}
.q1{
    
    width: 100%;
background-color: #f2f2f2;
   
}
.daohang{
     height: 50px;
    background-color: #ffffff;
    width: 100%;
}
.qian{
    float: left;
    margin-top: 18px;
    width: 3px;
    height: 16px;
    background-color: #0066ff;
    margin-left: 20px;
}
.biao{
float: left;
margin-top: 15px;
margin-left: 5px;
}
.zhuti{
    
    margin-top: 10px;
    background-color: #ffffff;
    margin-left: 2.5%;
    width: 95%;
    height: 1600px;
}
.zhu1{
    width: 95%;
    height: 100px;
    border: 1px solid #e4e4e4;
    margin-top: 15px;
    margin-left: 2.5%;
    float: left;
}
.zhu2{
    float: left;
    margin-left: 10%;
    margin-top: 20px;
}
.zhu3{
    float: left;
    
}
.zhu3>div:nth-child(1){
    
float: left;
margin-left: 30px;
font-size: 13px;
margin-top: 20px;
}
.zhu3>div:nth-child(2){
    font-size: 13px;
margin-top: 20px;
margin-left: 250px;
    float: left;
}
.zhu3>div:nth-child(3){
    font-size: 13px;
margin-top: 20px;
margin-left: 150px;
    float: left;
}
.zhu3>div:nth-child(4){
    font-size: 13px;
margin-top: 20px;
margin-left: 100px;
    float: left;
}
.zhu3>div:nth-child(5){
   clear: both;
}
.zhu3>div:nth-child(6){
        font-size: 13px;
margin-top: 20px;
margin-left: 30px;

    float: left;
}
.zhu3>div:nth-child(7){
    margin-left: 225px;
font-size: 13px;
margin-top: 20px;
    float: left;
}
.zhu3>div:nth-child(8){
    margin-left: 130px;
 font-size: 13px;
margin-top: 20px;
    float: left;
}
.zhu3>div:nth-child(9){
    margin-left: 75px;
 font-size: 13px;
margin-top: 20px;
    float: left;
}
.kk1{
    float: left;
    width: 47%;
    margin-left: 2.5%;
    margin-top: 10px;
    height: 185px;
    border: 1px solid #e4e4e4;
}
.kk2{
    float: left;
    width: 45.3%;
    margin-left: 2.5%;
    margin-top: 10px;
    height: 185px;
    border: 1px solid #e4e4e4;
}
#kk5{
    height: 416px;
     margin-left: 2.5%;
    width: 95%;
    float: left;
    border: 1px solid #e4e4e4;
    margin-top: 15px;
}
#kk6{
    height: 416px;
     margin-left: 2.5%;
    width: 95%;
    float: left;
    border: 1px solid #e4e4e4;
    margin-top: 15px;
}
.qingchu{
    clear: both;
   
}
</style>


