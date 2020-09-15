// 获取菜单列表！
import { getGoods, getTotal } from "@/request/goods"


export default {
    namespaced: true,
    state: {
        goodslist: [],  // 列表
        page: 1, // 页码数
        size: 10, // 每页数量
        total: 0 //总条数
    },
    getters: {
        goodslist: state => state.goodslist,
        page: state => state.page,
        size: state => state.size,
        total: state => state.total
    },
    mutations: {
        SET_LIST(state, data) {
            state.goodslist = data;
        },
        SET_PAGE(state, data) {
            state.page = data;
        },
        SET_SIZE(state, data) {
            state.size = data;
        },
        SET_TOTAL(state, data) {
            state.total = data;
        }
    },
    actions: {
        // 请求菜单列表的数据！
        async get_goods_list({ commit, state, dispatch }) {
            let res = await getGoods(state.page, state.size);
            res.forEach(val=>{
                val.specsattr = val.specsattr ? val.specsattr.split(","):[]
            })
            commit('SET_LIST', res)
            // 请求数量
            dispatch('get_goods_total')
        },
        // 获取规格的总数
        async get_goods_total({ commit }) {
            let res = await getTotal();
            commit('SET_TOTAL', res)
        },
        set_page({ commit, dispatch }, data) {
            commit('SET_PAGE', data)
            dispatch('get_goods_list')
        },
        set_size({ commit, dispatch }, data) {
            commit('SET_SIZE', data)
            dispatch('get_goods_list')
        }
    }
};