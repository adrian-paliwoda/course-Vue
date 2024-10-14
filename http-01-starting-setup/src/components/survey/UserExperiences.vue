<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadSurvey">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && errorMessage">{{errorMessage}}</p>
      <p v-else-if="!isLoading && (!results || results.length <= 0)">No stored experiences found.</p>
      <ul v-else-if="!isLoading && results && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  // props: ['results'],
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      errorMessage: null
    }
  },
  methods: {
    loadSurvey(){
      this.isLoading = true;
      this.errorMessage = null;
      
      const result = fetch('https://vueapp-c604d-default-rtdb.firebaseio.com/surveys.json');
      result.then(response => {
            if (response.ok) {
              return response.json();
            } else {
              console.log('Cannot fetch data');
            }
          }
      )
          .then(data => {
        this.isLoading = false;
        const results = [];
        for (const id in data) {
          results.push({id: id, name: data[id].name, rating: data[id].rating})
        }
        this.results = results;
      })
          .catch(() => {
            this.isLoading = false;
            this.errorMessage = 'Failed to fetch experience - pleases try again later'
            //console.log(error);
          })
    }
  },
  mounted() {
    this.loadSurvey();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>