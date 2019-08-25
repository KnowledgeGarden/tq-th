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
            Get Movies
          </b-btn>
        </div>
      </b-form>
    </b-jumbotron>
    <b-table
      dark
      striped
      hover
      small
      empty-text="No data for this search"
      :items="movieList"
      :fields="fields"
    >
    </b-table>
  </div>
</template>

<script>
import httpsService from "@/services/httpsService";
export default {
  name: "Search",
  props: {
    msg: String
  },
  computed: {
    searchbar: {
      get() {
        return this.$store.state.searchbar;
      },
      set(value) {
        this.$store.commit("updateSearchbar", value);
      }
    }
  },
  data() {
    return {
      isFetching: false,
      movieList: [],
      fields: {
        title: {
          sortable: true
        },
        rating: {
          sortable: true
        },
        runtime: {
          sortable: true
        },
        year: {
          sortable: true
        }
      }
    };
  },
  methods: {
    async onSubmitSearch() {
      const searchbar = this.searchbar;
      try {
        this.isFetching = true;
        this.movieList = (await MovieService.getCurrentMovies(
          { searchbar }
        )).data.data.movies;
      } catch (e) {
        // TO-DO: Add better error handling
        console.error("Search", "problem getting data", e.message);
      } finally {
        this.isFetching = false;
      }
    }
  }
};
</script>

<style scoped>
.searchContainer {
  height: 250px;
}
</style>
