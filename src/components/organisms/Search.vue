<template>
  <b-container fluid>
    <b-jumbotron header="Get Pivoting">
      <b-form @submit.prevent="onSubmitSearch">
        <b-input v-model="searchbar" placeholder="Enter Search Term"/>
        <div>
          <b-spinner
            v-if="isFetching"
            type="grow"
            label="Loading..."
          ></b-spinner>
          <b-btn
            v-else
            class="mt-2"
            type="submit"
          >
            Search
          </b-btn>
        </div>
      </b-form>
    </b-jumbotron>
  </b-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: "Search",
  computed: {
    ...mapState(['isFetching']),
  },
  data() {
    return {
      searchbar: ''
    }
  },
  methods: {
    async onSubmitSearch() {
      this.$store.dispatch("FETCH_TEXT", {term: this.searchbar, offset: 0, count: 500});
    }
  }
};
</script>

<style scoped>
.searchContainer {
  height: 250px;
}
</style>
