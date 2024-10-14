import mutations from "@/store/modules/auth/mutations";
import actions from "@/store/modules/auth/actions";
import getters from "@/store/modules/auth/getters";

export default {
    namespaced: false,
    state() {
        return {
            userId: null,
            token: null,
            tokenExpiration: null,
            didLogout: false
        }
    },
    mutations,
    actions,
    getters

}