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
    <b-table
      dark
      striped
      hover
      small
      empty-text="No data for this search"
      :items="app_data"
      :fields="fields"
    >
    </b-table>
  </div>
</template>

<script>
import httpService from "@/services/httpService";
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
  mounted() {
    console.log('env variables test', process.env)
  },
  data() {
    return {
      isFetching: false,
      app_data: [],
      fields: {
        tag: {
          sortable: true
        },
        user: {
          sortable: true
        },
        resources: {
          sortable: true
        }
      }
    };
  },
  methods: {
    async onSubmitSearch() {
      try {
        this.isFetching = true;
        this.app_data = await httpService.getText(this.searchbar, 0, 5);
      } catch (e) {
        // TO-DO: Add better error handling
        console.error("Search", "problem getting data", e);
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
