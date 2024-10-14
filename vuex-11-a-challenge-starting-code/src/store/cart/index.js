import mutations from "@/store/cart/mutations";
import actions from "@/store/cart/actions";
import getters from "@/store/cart/getters";

export default {
    namespaced: true,
    state() {
        return {
            items: [],
            total: 0,
            qty: 0
        }
    },
    getters: getters,
    mutations: mutations,
    actions: actions
};