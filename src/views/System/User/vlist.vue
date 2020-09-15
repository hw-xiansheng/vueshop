<template>
  <div class="table-bg">
      <el-table  :data="userlist">
          <el-table-column prop="uid" label="UID" width="320" align="center"></el-table-column>
          <el-table-column prop="username" label="管理员名称" align="center"></el-table-column>
          <el-table-column label="管理员角色" align="center">
              <template slot-scope="scope">
                  <el-tag type="success">{{scope.row.rolename}}</el-tag>
              </template>
          </el-table-column>
          <el-table-column label="状态">
              <template slot-scope="scope">
                  <el-tag type="success" v-if="scope.row.status==1">启用</el-tag>
                  <el-tag type="danger" v-if="scope.row.status==2">禁用</el-tag>
              </template>
          </el-table-column>
          <el-table-column label="修改">
                <template slot-scope="scope">
                    <el-button type="primary" size="small" @click="edit(scope.row)" circle icon="el-icon-edit"></el-button>
                    <el-button type="danger" size="small"  @click="del(scope.row.uid)"  circle icon="el-icon-delete"></el-button>
                </template>
          </el-table-column>
      </el-table>
      <el-pagination
      background
      @size-change="set_size"
      @current-change="set_page"
      :current-page="page"
      :page-sizes="[1, 2, 3, 4]"
      :page-size="size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>
<script>
import { mapGetters,mapActions,mapMutations } from "vuex"
import { delUser } from "@/request/user"
export default {
    data(){
        return{
        }
    },
    computed: {
        ...mapGetters({
            userlist:"user/userlist",
            page:"user/page",
            size:"user/size",
            total:"user/total"
        })
    },
    mounted() {
        if(!this.userlist.length){
            this.get_user_list();
        }
    },
    methods:{
        ...mapMutations({
            SET_PAGE:"user/SET_PAGE"
        }),
        ...mapActions({
            get_user_list:"user/get_user_list",
            set_page:"user/set_page",
            set_size:"user/set_size"
        }),
        edit(val){
            this.$emit('edit',{...val})
        },
        async del(uid){
            this.$confirm('确认删除吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(async ()=>{
                let res = await delUser(uid);
                if(res.code==200){
                    this.$message.success(res.msg)
                    // 如果本页只有1条数据！且不是第1页！
                    if(this.userlist.length==1 && this.page!=1){
                        this.SET_PAGE(this.page-1)
                    }
                    this.get_user_list(); // 重新获取列表！
                }else{
                    this.$message.error(res.msg)
                }
            }).catch(()=>{})
        }
    },
    components:{}
}
</script>
<style scoped>
</style>