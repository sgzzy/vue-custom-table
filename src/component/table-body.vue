<template>
  <div class="vue-custom-table-body">
    <table>
      <colgroup>
        <col v-for="(width, index) in columnsWidth" :key="index" :width="width < columnsMinWidth[index] ? columnsMinWidth[index] : width"></col>
      </colgroup>
      <tbody>
        <tr v-for="(item, itemIndex) in data" :key="'tr'+itemIndex">
          <td v-for="(value, index) in thead" :key="thead[index].key+itemIndex" :class="item.cellClassName ? item.cellClassName[thead[index].key] : ''">
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
  beforeMount() {
    console.info("TableBody beforeMount");
  },
  mounted() {
    console.info("TableBody mounted");
    // 设置最小宽度，避免表头换行
    this.setMinWidth();
  },
  methods: {
    align: function() {
      // thead和tbody对齐
      let firstTr = document.querySelectorAll(
        ".vue-custom-table-body > table > tbody > tr:first-of-type td"
      );
      firstTr = Array.prototype.slice.apply(firstTr);
      let columns = [];
      // 获取tbody首行各td的宽度，这里不考虑滚动条
      firstTr.forEach((el, index) => {
        let width =
          el.offsetWidth < this.columnsMinWidth[index]
            ? this.columnsMinWidth[index]
            : el.offsetWidth;
        columns.push(width);
      });
      return columns;
    },
    setMinWidth: function() {
      let table = document.querySelector(".vue-custom-table-body");
      let fontSize = parseInt(window.getComputedStyle(table).fontSize);

      this.thead.forEach((value, index) => {
        let length = value.title.length;
        this.columnsMinWidth.push(length * fontSize + 5);
      });

      this.$emit("minWidth", this.columnsMinWidth);
      this.$emit("align", this.align());
    }
  }
};
</script>
