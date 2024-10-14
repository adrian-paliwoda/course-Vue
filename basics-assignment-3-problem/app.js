const app = Vue.createApp({
        data() {
            return {
                result: 0,
            };

        },
        computed: {
            message() {
                if (this.result < 37) {
                    return "Not there yet";
                } else if (this.result > 37) {
                    return "Too much!";
                } else {
                    return "OK!"
                }
            }
        },

        methods:
            {
                add(number) {
                    this.result += number;
                }
            },

        watch: {
            message() {
                const that = this;
                setTimeout(() => {
                    that.result = 0;
                }, 5000)
            }
        }
    }
)

app.mount('#assignment');