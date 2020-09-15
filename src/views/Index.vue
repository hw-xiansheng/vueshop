<template>
  <div class="title">
    <h1>后台首页</h1>
    <div id="ccc">
      <p>11111</p>
    </div>
    <v-chart class="box" :options="t1data" />
    <v-chart class="box" :options="t2data" />
  </div>
</template>
<script>
import ECharts from "vue-echarts";
import "echarts/lib/chart/pie";
import "echarts/lib/chart/bar";
import "echarts/lib/component/polar";

let t1data = {
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)",
  },
  series: [
    {
      name: "访问来源",
      type: "pie",
      label: {
        formatter: "{b}:{c}({d}%)",
      },
      emphasis: {
        label: {
          show: true,
          // fontSize: '20',
          // fontWeight: 'bold'
        },
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
      data: [
        // { value: 335, name: '直接访问',itemStyle:{color:'black'} },
        // { value: 310, name: '邮件营销', itemStyle: { color: 'orange' } },
        // { value: 234, name: '联盟广告', itemStyle: { color: 'pink' } },
        // { value: 135, name: '视频广告', itemStyle: { color: 'blue' } },
        // { value: 1548, name: '搜索引擎', itemStyle: { color: 'green' } }
      ],
    },
  ],
};

let t2data = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        // data: [120, 200, 150, 80, 70, 110, 130],
        data:[],
        type: 'bar'
    }]
};


export default {
  data() {
    return {
      t1data: t1data,
      t2data:{}
    };
  },
  created() {
     setTimeout(() => {
        this.t1data.series[0].data = [
          { value: 335, name: '直接访问',itemStyle:{color:'black'} },
          { value: 310, name: '邮件营销', itemStyle: { color: 'orange' } },
          { value: 234, name: '联盟广告', itemStyle: { color: 'pink' } },
          { value: 135, name: '视频广告', itemStyle: { color: 'blue' } },
          { value: 1548, name: '搜索引擎', itemStyle: { color: 'green' } }
        ]
        t2data.series[0].data = [120, 200, 150, 80, 70, 110, 130]
        this.t2data = t2data
     }, 3000);
  },
  methods: {},
  components: {
    "v-chart": ECharts,
  },
};

// 安装：npm install stylus stylus-loader
// style标签上面加上： lang="stylus"
// 就可以写stylus语法的内容！
</script>
<style scoped lang="stylus">
/*
.box {
  width: 500px;
  height: 250px;
  display: inline-block;
  background-color: #fff;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
}
*/
$w = 510px
.box
  width: $w;
  height: 250px;
  display: inline-block;
  background-color: #fff;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
.title{
  border:2px solid blue;
  h1{
    color:blue;
  }
  #ccc{
    background:blue;
    p{
      color:pink;  
    }
  }
}
  
    
      
</style>