<template>
  <div class="vue-custom-table">
    <table-header :columns="thead" :columnsWidth="columnsWidth"></table-header>

    <table-body :data="datas[curPage]" :thead="thead" :columnsMinWidth="columnsMinWidth" :columnsWidth="columnsWidth" v-on:align="align" v-on:minWidth="minWidth"></table-body>
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
    datas: {
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
      columnsWidth: [],
      curPage: 0,
    };
  },
  beforeMount() {
    console.info("Table beforeMount");
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
