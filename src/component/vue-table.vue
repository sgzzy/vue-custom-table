<template>
  <div class="vue-custom-table">
    <table-header :columns="thead" :columnsWidth="columnsWidth"></table-header>
    <table-body :data="data" :thead="thead" :columnsMinWidth="columnsMinWidth" :columnsWidth="columnsWidth" v-on:align="align" v-on:minWidth="minWidth"></table-body>
  </div>
</template>
<script>
import tableHeader from "./table-header";
import tableBody from "./table-body";
export default {
  name: "vue-custom-table",
  components: { tableHeader, tableBody },
  props: {
    thead: {
      type: Array
    },
    data: {
      type: Array
    },
    isPull: {
      type: Boolean,
      default: false
    },
    pageSize: Number,
    height: Number
  },
  data: function() {
    return {
      columnsMinWidth: [],
      columnsWidth: []
    };
  },
  methods: {
    align: function(cloumns) {
      this.columnsWidth = cloumns;
    },
    minWidth: function(minWidth) {
      this.columnsMinWidth = minWidth;
    }
  }
};
</script>
