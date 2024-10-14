import mutations from "@/store/numbers/mutations";
import getters from "@/store/numbers/getters";
import actions from "@/store/numbers/actions";

const counterModule = {
    namespaced: true,
    state() {
        return {
            counter: 0
        };
    },
    mutations: mutations,
    getters: getters,
    actions: actions
}

export default counterModule;