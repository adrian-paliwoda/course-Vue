import {createStore} from "vuex";
import counterModule from "@/store/numbers";
import authModule from "@/store/auth";

export default createStore({
    modules: {
        numbers: counterModule,
        auth: authModule
    }
});