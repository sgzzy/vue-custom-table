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
    // columnsMinWidth防止表头换行
    return {
      columnsMinWidth: [],
      columnsWidth: []
    };
  },
  created() {
  },
  mounted() {

  },
  methods: {
    align: function(cloumns) {
      this.columnsWidth = cloumns;
      console.log("align emit", this.columnsWidth);
    },
    minWidth: function(minWidth) {
      this.columnsMinWidth = minWidth;
      console.log("minWidth emit", this.columnsMinWidth);
    }
  }
};
</script>
<style scoped>

</style>
