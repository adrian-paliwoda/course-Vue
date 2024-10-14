export default {
    total(state) {
        if (state.items.length <= 0) {
            return 0;
        }
        
        return state.items.reduce((previousValue, currentValue) => currentValue.price * currentValue.qty + previousValue, 0).toFixed(2);
    },
    // itemTotal: (state) => (id) => {
    //     const item = state.items.find(p => p.id === id)
    //     if(item) {
    //         return (item.price * item.qty).toFixed(2);
    //     }
    // },
    qty(state) {
        return state.qty;
    },
    items(state) {
        return state.items;
    },
}