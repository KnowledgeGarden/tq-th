import Vue from "vue";

Vue.filter("truncate", value => {
  if (!value) {
    return "";
  }
  return value.length < 20 ? value : value.substring(0, 20);
});
