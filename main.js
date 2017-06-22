/**
 * Created by MBENBEN on 2017/6/22.
 */
export default {
    install(Vue,options){
        Vue.prototype.$bus=window.bus=new Vue()
    }
}