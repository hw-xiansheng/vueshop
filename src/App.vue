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
    hewu(){
<<<<<<< HEAD
      console.log('武哥的测试000===武哥修改了☆☆☆');
=======
      console.log('武哥的测试000===张悦修改了！！');
>>>>>>> 7ed6972fb2c97ff74d98e4db2ed6fdc78a019899
      // console.log("武哥的修改1");
      console.log("武哥的修改2");
      console.log("呵呵呵大！！！！武哥发送了好多的变化啊啊啊啊啊！")
      console.log("武哥发送！！！改过的哦哦啊！")
      console.log("武哥的演示333")
    },
    zhangyue(){
      console.log('张悦的修改000，来自武哥的变化');
      console.log("张悦的修改1")
      console.log('张悦的修改3')
      console.log('张悦的修改4')
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
