export default {
    counter(state) {
        return state.counter * 2;
    },
    normalizedCounter(_, getters) {
        const counter = getters.counter;
        if (counter < 0) {
            return 0;
        }

        if (counter > 100) {
            return 100;
        }

        return counter;
    }
}