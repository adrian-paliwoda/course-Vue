import {createStore} from "vuex";

import auth from "@/store/auth";
import cart from "@/store/cart";
import Product from "@/store/product";

export default createStore({
    modules: {
        auth: auth,
        cart: cart,
        product: Product
    }
});