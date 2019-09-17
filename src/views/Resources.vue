<template>
  <div>
    <h1>Resources</h1>
    <b-table
      striped
      hover
      responsive
      :items="items" :fields="fields"
    >
      <template slot="url" slot-scope="row">
        <a :href="row.item.url">{{ row.item.url }}</a>
      </template>
    </b-table>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex';
  import BaseTable from '@/components/atoms/BaseTable';
  export default {
    components: {
      BaseTable
    },
    mounted(){
      this.$store.dispatch("FETCH_RESOURCES", { offset: 0, count: 5 });
    },
    computed: mapState({
      items: 'resources'
    }),
    data() {
      return {
        fields: [
          {
            key: 'title',
            label: 'Article',
            sortable: true
          },
          {
            key: 'url',
            label: 'Link',
            sortable: true
          }
        ]
      }
    },
  }
</script>

<style scoped>

</style>