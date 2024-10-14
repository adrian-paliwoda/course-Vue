<template>
  <div>
    <section>
      <base-card>
        <header>
          <h2>Requests Received</h2>
        </header>
        <base-dialog :show="!!error" @close="closeError">
          <p>An error occurs!</p>
        </base-dialog>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasRequests">
          <request-item v-for="request in receivedRequests" :key="request.id" :email="request.userEmail"
                        message="request.message"></request-item>
        </ul>
        <h3 v-else>You haven't received any requests yet!</h3>
      </base-card>
    </section>
  </div>
</template>

<script setup>
import BaseCard from "@/components/ui/BaseCard.vue";
import RequestItem from "@/components/requests/requestItem.vue";
import BaseDialog from "@/components/ui/BaseDialog.vue";
import BaseSpinner from "@/components/ui/BaseSpinner.vue";
</script>

<script>
export default {
  components: [BaseCard, RequestItem],
  data() {
    return {
      isLoading: false,
      error: null
    }
  },
  computed: {
    receivedRequests() {
      return this.$store.getters['requests/requests'];
    },
    hasRequests() {
      return !this.isLoading && this.$store.getters['requests/hasRequests']
    }
  },
  methods: {
    async refresh() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('requests/loadRequests');
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }

      this.isLoading = false;
    },
    closeError() {
      this.error = null;
    }
  },
  created() {
    this.refresh()
  }
}
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>