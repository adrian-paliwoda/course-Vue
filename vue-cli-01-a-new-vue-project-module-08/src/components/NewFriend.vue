<template>
<form id="new-friend-form" @submit.prevent="onCreateNewFriend">
  <div>
    <label for="name">Name</label>
    <input type="text" id="name" v-model="name" />
    <br/>
  </div>

  <div>
    <label for="phone-number" >Phone Number</label>
    <input type="text" id="phone-number" v-model="phoneNumber" />
    <br/>
  </div>

  <div>
    <label for="email-address">Email</label>
    <input type="text" id="email-address" v-model="emailAddress" />
    <br/>
  </div>

  <div>
    <button type="submit" id="confirm-new-friend">Submit</button>
  </div>
</form>
</template>

<script>

export default {
  emits: ['new-friend-created'],
  data(){
    return {
      name:  '',
      emailAddress: '',
      phoneNumber: '',
    }
  },
  methods:{

    onCreateNewFriend(){
      const newFriend = {
        id: new Date().toISOString(),
        name: this.name,
        phone: this.phoneNumber,
        email: this.emailAddress,
      };

      this.$emit("new-friend-created", newFriend);
    }
  }

}
</script>



<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem;
}
</style>