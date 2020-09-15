import $axios from "@/common/http"  // 导入封装好的axios!

/**
 * 获取分类列表
 */
export async function getCategory() {
    let res = await $axios.get("/catelist?istree=1")
    if(res.code==200 && res.list){
        return res.list
    }else{
        return [];
    }
}
/**
 * 添加分类
 * @param {*} data  添加的数据
 */
export function addCategory(data){
    return  $axios.post("/cateadd",data)
}
/**
 * 修改分类
 * @param {*} data  修改的数据
 */
export function editCategory(data) {
    return $axios.post("/cateedit", data)
}
/**
 * 删除分类
 * @param {*} id  删除的ID
 */
export function delCategory(id) {
    return $axios.post("/catedelete", {id})
}