<template>
  <div class="home">
    
    <div class='add' @click='add'>
      添加
    </div>
    <div class='delete' @click='remove'>
      删除
    </div>
    <div class='xiugai' @click='update'>
      修改
    </div>
    <div>

    <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="courseDesc"
      label="courseDesc"
      sortable
     >
    </el-table-column>
     <el-table-column
      prop="courseName"
      label="courseName"
      sortable
      >
    </el-table-column>  
 <el-table-column
      prop="id"
      label="id"
      sortable
      >
    </el-table-column>  
     <el-table-column
      prop="professional"
      label="professional"
      sortable
     >
     <template #default='{row}'>
    {{row.professional}}
     </template>
    </el-table-column>  
  </el-table>
    </div>



  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      tableData: [
         
        ],

    }
  },
  mounted(){
 this.getAll()
  },
methods:{
  update(){
  axios.post("http://139.9.169.87:8081/examsystem/updateCourse?professional.id=1&professional.professionalName=aeaewa&professional.professionalDesc=awraw&id=831&courseName=kk&courseDesc=kk",
   {
  
  }
  ,
  {headers:{
     "Accept": "application/json",
     "Content-Type": "application/x-www-form-urlencoded"
   }
  }
  )
  .then(res=>{
    console.log(res)
  })
  .catch(err=>{
    console.log(err)
  })
  },
  remove(){
    axios.get("http://139.9.169.87:8081/examsystem/deleteCourse",{params:{id:1985}})
    .then(res=>{
   console.log(res)
    })
    .catch(err=>{
      console.log(err)
    })
  },
  add(){
    
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    axios.defaults.transformRequest = [function (data) {
    let ret = ''
    for (let it in data) {
      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    return ret
}]

  axios.post("http://139.9.169.87:8081/examsystem/addCourse?professional.id=1&professional.professionalName=2&professional.professionalDesc=3&id=4&courseName=pp&courseDesc=ll",
  {
   
      professionalId:161,
    
  }
   ,{headers:{
     "Accept": "application/json",
     "Content-Type": "application/x-www-form-urlencoded",
   }}
  )
    .then(res=>{
      console.log(res)
    })
    .catch(err=>{
      console.log(err)
    })
  },
  getAll(){
    axios.get("http://139.9.169.87:8081/examsystem/getAllCourse")
    .then(res=>{
   this.tableData=res.data.data
      console.log(this.tableData.length)
    })
    .catch(err=>{
      console.log(err)
    })
  }
}
};
</script>
<style lang='scss' scoped>
.add{
  margin-left: 50px;
  margin-top: 30px;
  text-align: center;
  width: 100px;
  height: 60px;
  border: 1px dimgray solid;
  line-height: 60px;
  float: left;
}
.add:hover{
  cursor: pointer;
}
.delete:hover{
  cursor: pointer;
}
.xiugai:hover{
  cursor: pointer;
}
.delete{
margin-left: 50px;
margin-top: 30px;
  text-align: center;
  width: 100px;
  height: 60px;
  border: 1px dimgray solid;
  line-height: 60px;
  float: left;
}
.xiugai{
  margin-top: 30px;
   margin-left: 50px;
  text-align: center;
  width: 100px;
  height: 60px;
  border: 1px dimgray solid;
  line-height: 60px;
  float: left;
}
</style>
