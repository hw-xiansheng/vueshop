// 获取菜单列表！
import { getSpecs, getTotal } from "@/request/specs"


export default {
    namespaced:true,
    state: {
        specslist:[],  // 角色列表
        page:1, // 页码数
        size:10, // 每页数量
        total:0 //总条数
    },
    getters: {
        specslist: state => state.specslist,
        page: state => state.page,
        size: state => state.size,
        total: state => state.total
    },
    mutations: {
        SET_LIST(state,data){
            state.specslist = data;
        },
        SET_PAGE(state,data){
            state.page = data;
        },
        SET_SIZE(state, data){
            state.size = data;
        },
        SET_TOTAL(state, data) {
            state.total = data;
        }
    },
    actions: {
        // 请求菜单列表的数据！
        async get_specs_list({commit,state,dispatch}){
            let res = await getSpecs(state.page,state.size);  
            commit('SET_LIST',res)
            // 请求数量
            dispatch('get_specs_total')
        },
        // 获取规格的总数
        async get_specs_total({ commit}){
            let res = await getTotal();
            commit('SET_TOTAL',res)
        },
        set_page({ commit,dispatch }, data){
            commit('SET_PAGE',data)
            dispatch('get_specs_list')
        },
        set_size({ commit, dispatch},data){
            commit('SET_SIZE', data)
            dispatch('get_specs_list')
        }
    }
};