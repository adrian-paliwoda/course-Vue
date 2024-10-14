import getters from "@/store/auth/getters";
import actions from "@/store/auth/actions";
import mutations from "@/store/auth/mutations";

const authModule = {
    namespaced: true,
    state() {
        return {
            isLoggedIn: false
        };
    },
    mutations: mutations,
    getters: getters,
    actions: actions
};


export default authModule;