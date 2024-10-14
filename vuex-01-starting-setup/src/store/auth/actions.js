export default {
    login(context) {
        context.commit('login');
        console.log("logged in");
    },
    logout(context) {
        context.commit('logout');
        console.log("logged out")
    }
}