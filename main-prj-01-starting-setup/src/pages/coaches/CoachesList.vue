<template>
  <div>
    <base-dialog :show="!!error" title="An error occurred!" @close="closeError">
      <p>{{error}}</p>
    </base-dialog>
    <section>
      <coach-filter @changed-filter="setFilters"></coach-filter>
    </section>
    <base-card>
      <section>
        <div class="controls">
          <base-button mode="outline" @click="refresh(true)">Refresh</base-button>
          <base-button v-if="!isCoach && !isLoading" link mode="outline" to="/register">Register as Coach</base-button>
        </div>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasCaches">
          <coach-item v-for="coach in filteredCoaches" :id="coach.id"
                      :key="coach.id" :areas="coach.areas" :first-name="coach.firstName" :last-name="coach.lastName"
                      :rate="coach.hourlyRate"></coach-item>
        </ul>
        <h3 v-else>No coaches found.</h3>
      </section>
    </base-card>
  </div>
</template>

<script>
import CoachItem from "@/components/coaches/CoachItem.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import CoachFilter from "@/components/coaches/CoachFilter.vue";
import BaseSpinner from "@/components/ui/BaseSpinner.vue";
import BaseDialog from "@/components/ui/BaseDialog.vue";

export default {
  components: {BaseDialog, BaseSpinner, CoachFilter, BaseButton, CoachItem},
  data() {
    return {
      isLoading: false,
      error: null,
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,

      }
    }
  },
  computed: {
    filteredCoaches() {
      const coaches = this.$store.getters["coaches/coaches"];
      return coaches
          .filter(p => {
                if (this.activeFilters.frontend && p.areas.includes('frontend')) {
                  return true;
                }
                if (this.activeFilters.backend && p.areas.includes('backend')) {
                  return true;
                }
                return !!(this.activeFilters.career && p.areas.includes('career'));
              }
          );
    },
    hasCaches() {
      return !this.isLoading &&  this.$store.getters["coaches/hasCoaches"];
    },
    isCoach() {
      return this.$store.getters['coaches/isCoach'];
    }
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async refresh(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('coaches/loadCoaches', {forceRefresh: refresh});
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
    this.refresh();
  }
}

</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>