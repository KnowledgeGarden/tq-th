<template>
  <div>
    <BaseTable :items="items.data" :fields="fields" />
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
      items: 'text'
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