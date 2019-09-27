<template>
  <b-container fluid>
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
          @click="handleTagClick"
        >
          {{ item }}
        </b-button>
    </b-card>
  </b-container>
</template>

<script>
  import { mapActions, mapState } from 'vuex';
  export default {
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
    mounted(){
      if (!this.$store.state.tags.length) {
        this.$store.dispatch("FETCH_TAGS", { offset: 0, count: 5000 });
      }
    },
    methods: {
      handleTagClick(event) {
        const { target: { innerText: tag } } = event;
        this.$store.dispatch("FETCH_TAG_PIVOT", { tag, offset: 0, count: 5000 })
      }
    }
  }
</script>

<style scoped>
  .tagButton {
    margin: 5px;
  }
</style>