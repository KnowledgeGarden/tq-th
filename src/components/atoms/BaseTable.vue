<template>
  <b-table
    striped
    hover
    responsive
    :items="items"
    :fields="fields"
  >
  </b-table>
</template>

<script>
  export default {
    name: "BaseTable",
    props: {
      items: Array,
      fields: Array,
    },
  }
</script>
