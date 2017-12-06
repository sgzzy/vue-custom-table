<template>
  <div class="vue-custom-table">
    <table-header :columns="thead" :columnsWidth="columnsWidth"></table-header>
    <table-body :data="data" :thead="thead" :columnsMinWidth="columnsMinWidth" :columnsWidth="columnsWidth" v-on:align="align" ></table-body>
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
    this.thead.forEach((value, index) => {
      let length = value.title.length;
      let table = document.querySelector(".vue-custom-table");

      let fontSize = parseInt(window.getComputedStyle(table).fontSize);
      this.columnsMinWidth.push(length * fontSize + 5);
    });
  },
  methods: {
    align: function(cloumns) {
      this.columnsWidth = cloumns;
    }
  }
};
</script>
<style scoped>

</style>
