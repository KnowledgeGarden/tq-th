<template>
  <div>
    <b-jumbotron header="Pivot Browser">
      <b-form @submit.prevent="onSubmitSearch">
        <b-input v-model="searchbar" />
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
            Get Data
          </b-btn>
        </div>
      </b-form>
    </b-jumbotron>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: "Search",
  computed: {
    ...mapState(['isFetching']),
    searchbar: {
      get () {
        return this.$store.state.searchbar
      },
      set (string) {
        this.$store.commit('SET_SEARCHBAR', string)
      }
    }
  },
  methods: {
    async onSubmitSearch() {
      this.$store.dispatch("FETCH_TEXT", {term: this.searchbar, offset: 0, count: 5});
    }
  }
};
</script>

<style scoped>
.searchContainer {
  height: 250px;
}
</style>
