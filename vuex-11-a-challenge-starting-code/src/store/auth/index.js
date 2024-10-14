import getters from "@/store/auth/getters.js";
import actions from "@/store/auth/actions.js";
import mutations from "@/store/auth/mutations.js";

export default {
    namespaced: true,
    state() {
        return {
            isLoggedIn: false
        }
    },
    mutations,
    actions,
    getters,
};