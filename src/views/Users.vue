<template>
  <b-container fluid>
    <h1>Users</h1>
    <b-card class="text-center">
      <ul class="list-group">
        <li class="list-group-item" v-for="item in items" :key="item">{{ item }}</li>
      </ul>
    </b-card>
  </b-container>
</template>

<script>
  import { mapActions, mapState } from 'vuex';
  export default {
    mounted(){
      if (!this.$store.state.users.length) {
        this.$store.dispatch("FETCH_USERS", { offset: 0, count: 50 });
      }
    },
    computed: mapState({
      items: 'users'
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