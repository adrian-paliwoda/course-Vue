import getters from "@/store/product/getters";
import products from '@/store/product/products.json'


export default {
    namespaced: true,
    state() {
        return {
            products: products,
            
        }
    },
    getters: getters
};