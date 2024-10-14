<template>
    <div>
        <!-- <h2>{{ userName }}</h2> -->
        <h2>{{ uName }}</h2>
        <h3>{{ age }}</h3>
    </div>
</template>

<script>
import { computed, inject, onBeforeMount, onMounted } from 'vue';

export default {
    // props: ['firstName', 'lastName', 'age'],

    // computed: {
    //     userName(){
    //         return this.firstName + " " + this.lastName;
    //     }
    // },

    // setup(props, context) {
    setup() {
        const age = inject('age');
        const firstName = inject('firstName');
        const lastName = inject('lastName');

        const uName = computed(function(){
            return firstName.value + ' ' + lastName.value;
        });

        // context.emit('save-data');

        onBeforeMount(function(){
            console.log('bofeoreMount');
        });

        onMounted(function(){
            console.log('onMounted');
        });


        return {uName, age}
    }

}
</script>