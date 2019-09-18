<template>
  <div v-if="items.length">
    <h2>You searched for: {{ query }}</h2>
    <BaseTable :items="items" :fields="fields" />
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import BaseTable from "@/components/atoms/BaseTable.vue";

  export default {
    name: 'SearchTable',
    components: {
      BaseTable
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