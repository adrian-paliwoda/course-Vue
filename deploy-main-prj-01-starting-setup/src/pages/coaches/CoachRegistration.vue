<template>
  <div>
    <section>
      <base-card>
        <h2>Register as a coach now!</h2>
        <coach-form @save-data="saveData"></coach-form>
      </base-card>
    </section>
  </div>
</template>

<script setup>
import BaseCard from "@/components/ui/BaseCard.vue";
import CoachForm from "@/components/coaches/CoachForm.vue";
</script>

<script>
export default {
  components: [CoachForm, BaseCard],
  methods: {
    saveData(data) {
      this.$store.dispatch('coaches/registerCoach', data);
      this.$router.push('/coaches');
      // this.$route.replace('/coaches');
    }
  }
}
</script>

<style scoped>

</style>