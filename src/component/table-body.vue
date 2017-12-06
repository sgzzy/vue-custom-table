<template>
  <div class="vue-custom-table-body">
    <table>
      <colgroup>
          <col v-for="(width, index) in columnsWidth" :key="index" :width="width < columnsMinWidth[index] ? columnsMinWidth[index] : width"></col>
      </colgroup>
      <tbody>
        <tr v-for="(item, itemIndex) in data" :key="'tr'+itemIndex">
          <td v-for="(value, index) in thead" :key="thead[index].key+itemIndex">
            {{item[thead[index].key]}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "table-body",
  props: {
    data: Array,
    thead: Array,
    columnsWidth: Array,
    columnsMinWidth: Array
  },
  mounted() {

    this.$emit('align',this.align());
  },
  methods: {
    align: function() { // thead和tbody对齐
      let firstTr = document.querySelectorAll(".vue-custom-table-body > table > tbody > tr:first-of-type td");
      firstTr = Array.prototype.slice.apply(firstTr);
      let columns = [];
      // 获取tbody首行各td的宽度，这里不考虑滚动条
      firstTr.forEach((el, index) => {
        columns.push(el.offsetWidth);
      });
      return columns;
    }
  }
};
</script>
<style scoped>

</style>
