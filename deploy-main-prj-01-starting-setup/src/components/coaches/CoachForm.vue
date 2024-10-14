<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{invalid: !this.firstName.isValid}">
      <label for="firstname">Firstname</label>
      <input id="firstname" v-model.trim="firstName.val" type="text" @blur="clearValidity('firstName')">
      <p v-if="!this.firstName.isValid">Firstname must not be empty</p>
    </div>
    <div class="form-control" :class="{invalid: !this.lastName.isValid}">
      <label for="lastname">Lastname</label>
      <input id="lastname" v-model.trim="lastName.val" type="text" @blur="clearValidity('lastName')">
      <p v-if="!this.lastName.isValid">Lastname must not be empty</p>
    </div>
    <div class="form-control" :class="{invalid: !this.description.isValid}">
      <label for="description">Description</label>
      <textarea id="description" v-model.trim="description.val" rows="5" @blur="clearValidity('description')"></textarea>
      <p v-if="!this.description.isValid">Description must not be empty</p>
    </div>
    <div class="form-control" :class="{invalid: !this.rate.isValid}">
      <label for="rate">Hourly Rate</label>
      <input id="rate" v-model.number="rate.val" type="number" @blur="clearValidity('rate')">
      <p v-if="!this.rate.isValid">Rate must be greater than 0</p>
    </div>
    <div class="form-control" :class="{invalid: !this.areas.isValid}">
      <h3>Aras of Expertise</h3>
      <div>
        <label for="frontend">Frontend Developer</label>
        <input id="frontend" v-model="areas.val" type="checkbox" value="frontend" @blur="clearValidity('areas')">
      </div>
      <div>
        <label for="backend">Backend Developer</label>
        <input id="backend" v-model="areas.val" type="checkbox" value="backend" @blur="clearValidity('areas')">
      </div>
      <div>
        <label for="career">Career Advisory</label>
        <input id="career" v-model="areas.val" type="checkbox" value="career" @blur="clearValidity('areas')">
      </div>
      <p v-if="!this.areas.isValid">At least one expertise must be selected</p>
    </div>
    <p v-if="!formIsValid">Please fix the above errors and submit again.</p>
    <base-button>Register</base-button>
  </form>
</template>

<script>

import BaseButton from "@/components/ui/BaseButton.vue";

export default {
  emits: ['save-data'],
  components: [BaseButton],
  data() {
    return {
      firstName: {
        val: '',
        isValid: true
      },
      lastName: {
        val: '',
        isValid: true
      },
      description: {
        val: '',
        isValid: true
      },
      rate: {
        val: null,
        isValid: true
      },
      areas: {
        val: [],
        isValid: true
      },
      formIsValid: true
    }
  },
  methods: {
    submitForm() {
      this.validateForm()
      if (this.formIsValid) {
        const formData = {
          first: this.firstName.val,
          last: this.lastName.val,
          desc: this.description.val,
          rate: this.rate.val,
          areas: this.areas.val
        }

        this.$emit('save-data', formData)
      }
    },
    validateForm() {
      this.formIsValid = true;
      this.firstName.isValid = true;
      this.lastName.isValid = true;
      this.description.isValid = true;
      this.rate.isValid = true;
      this.areas.isValid = true;

      if (this.firstName.val === '') {
        this.firstName.isValid = false;
        this.formIsValid = false
      }

      if (this.lastName.val === '') {
        this.lastName.isValid = false;
        this.formIsValid = false
      }

      if (this.description.val === '') {
        this.description.isValid = false;
        this.formIsValid = false
      }

      if (!this.rate.val || this.rate.val < 0) {
        this.rate.isValid = false;
        this.formIsValid = false
      }
      
      if (this.areas.val.length === 0) {
        this.areas.isValid = false;
        this.formIsValid = false
      }
    },
    clearValidity(input) {
      this[input].isValid = true;
    }
  }
}

</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>