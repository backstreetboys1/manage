<template>
  <div class="q1">
      
      <div class="daohang">
          <div class="qian"></div>
<div class="biao">商品类别</div>
      </div>
      <div class="zhuti">

 <el-table
      :data="list"
      style="width: 100%">
      <el-table-column
        prop="QuestionId"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="Title"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="Content"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="Prize"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="CreateUserId"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="CreateUserName"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="CreatedTime"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="VisitCount"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="State"
        label="地址">
      </el-table-column>
    </el-table>
        

  </div>
  </div>
</template>

<script>
export default {
     data() {
    return {
      list:''
    }
  },
  created() {
    this.$axios.get("http://47.111.250.151:8081/api/Question/GetQuestion")
    .then(res => {
      this.list = res.data.rows
    })
  },
    }
</script>

<style scoped>
.h11{
  width: 170px;
  
}
.h12{
  width: 95%;
  margin-left: 2.5%;
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
    height: 1000px;
}
</style>