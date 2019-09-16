<template>
  <div>
    <B-Table :items="items.data" :fields="fields" />
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import BTable from "@/components/atoms/BTable.vue";
  export default {
    name: 'SearchTable',
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