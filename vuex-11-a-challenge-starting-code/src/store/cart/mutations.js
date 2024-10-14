export default {
    addProductToCart(state, productData) {
        const productInCartIndex = state.items.findIndex(
            (ci) => ci.id === productData.id
        );
        
        if (productInCartIndex >= 0) {
            state.items[productInCartIndex].qty++;
        } else {
            const newItem = {
                id: productData.id,
                title: productData.title,
                image: productData.image,
                price: productData.price,
                qty: 1,
            };
            state.items.push(newItem);
        }
        state.qty++;
        state.total += productData.price;
    },

    removeProductFromCart(state, payload) {
        const productInCartIndex = state.items.findIndex(
            (cartItem) => cartItem.id === payload.id
        );
        const prodData = state.items[productInCartIndex];
        state.items.splice(productInCartIndex, 1);
        state.qty -= prodData.qty;
        state.total -= prodData.price * prodData.qty;
    },
}