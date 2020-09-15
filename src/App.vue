<template>
  <div id="app">
    <!-- 顶级出口！ -->
    <!-- Login/Layout(管理系统！) -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
