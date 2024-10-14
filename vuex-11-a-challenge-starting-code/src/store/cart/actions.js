export default {
    addProductToCart(context, productData) {
        const products = context.rootGetters['product/products'];
        if (products) {
            const product = products.find(p => p.id === productData.id);
            
            context.commit('addProductToCart', product);
        }
        
    },
    removeProductFromCart(context, payload){
        context.commit('removeProductFromCart', payload);
    }
}