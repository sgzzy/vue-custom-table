<template>
  <div class="vue-custom-table-header">
    <table>
      <colgroup>
          <col v-for="(width, index) in columnsWidth" :key="index" :width="width"></col>
      </colgroup>
      <thead>
        <tr>
          <th v-for="(column, index) in columns" :key="'th'+index" :class="column.className">
            {{column.title}}
          </th>
        </tr>
      </thead>
    </table>
  </div>
</template>
<script>
export default {
  name: "table-header",
  props: {
    columns: Array,
    columnsWidth: Array
  }
};
</script>
