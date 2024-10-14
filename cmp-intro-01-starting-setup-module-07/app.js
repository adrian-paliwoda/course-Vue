const app = Vue.createApp({
    data() {
        return {
            detailsAreVisible: false,
            friends: [
                {
                    id: 'manuel', name: 'Manuel Loranzo', phone: '90213 1231', email: 'ml@localhost.com'
                },
                {
                    id: 'julie', name: 'Julie Jones', phone: '32213 1231', email: 'julie@localhost.com'
                }
            ],
        }
    },
});

app.component('friend-contact', {
    props: ['friend'],
    template: `
    <li>
          <h2>{{ friend.name }}</h2>
          <button @click="toggleDetails" >{{ detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
          <ul :style="detailsAreVisible ? {visibility: 'visible'} : {visibility: 'hidden'}">
            <li><strong>Phone:</strong> {{friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
          </ul>
    </li>
    `,
    data() {
        return {
            detailsAreVisible: false,
        }
    },
    methods:{
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    },

});

app.mount('#app');