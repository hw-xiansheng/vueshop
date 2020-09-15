<template>
  <div id="app">
    <!-- 顶级出口！ -->
    <!-- Login/Layout(管理系统！) -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){},
  methods: {
    zhagnyuetest(){
        console.log("张悦的测试！")
        console.log("张悦的测试2！")
    },
    wugtest(){
      console.log("武哥的测试！")
      console.log("武哥的测试2！！！")
      console.log("武哥的测试3！！");
    }
  },
}
</script>

<style>
*{margin:0;padding: 0;}
.toggle-btn i{
  font-size: 14px;
}
.table-bg{
  background-color: #fff;
  padding: 20px;
  margin:  15px 0;
}
.el-dialog__header{
  border: 1px solid #ddd;
  padding: 15px 20px 10px!important;
}
</style>
