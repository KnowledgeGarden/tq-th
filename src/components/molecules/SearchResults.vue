<template>
  <div v-if="items.length">
    <h2>{{ items.length }} search results for: {{ query }}</h2>
    <SearchTable :items="items" :fields="fields" />
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import SearchTable from "@/components/atoms/SearchTable.vue";

  export default {
    name: 'SearchResults',
    components: {
      SearchTable
    },
    computed: mapState({
      items: 'text',
      query: 'searchbar'
    }),
    data() {
      return {
        fields: [
          {
            key:'title',
            sortable: true
          },
          {
            key:'user',
            sortable: true
          },
          {
            key:'tags',
            sortable: true
          }
        ]
      }
    },
  }
</script>