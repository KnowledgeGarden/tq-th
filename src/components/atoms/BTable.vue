<template>
  <b-table
    striped
    hover
    :items="items"
    :fields="fields"
  >
  </b-table>
</template>

<script>
  export default {
    name: "BTable",
    props: {
      items: Array,
      fields: Array,
    },
  }
</script>
