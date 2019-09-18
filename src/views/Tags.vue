<template>
  <div>
    <h1>Tags</h1>
    <b-input v-model="searchbar" placeholder="Search Tags"></b-input>
    <b-card class="text-center">
        <b-button
          class="tagButton"
          v-for="item in filteredList"
          :key="item"
          pill
          size="sm"
          variant="info"
        >
          {{ item }}
        </b-button>
    </b-card>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex';
  export default {
    mounted(){
      if (!this.$store.state.tags.length) {
        this.$store.dispatch("FETCH_TAGS", { offset: 0, count: 500 });
      }
    },
    computed: {
      ...mapState({
        items: 'tags'
      }),
      filteredList() {
        return this.items.filter(tag => {
          return tag.toLowerCase().includes(this.searchbar.toLowerCase())
        });
      }
    },
    data() {
      return {
        searchbar: '',
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
  .tagButton {
    margin: 5px;
  }
</style>