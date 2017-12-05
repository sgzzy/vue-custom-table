<template>
  <div>
    <table>
      <colgroup>
          <col v-for="(column, index) in columns" :key="index" :width="column.width"></col>
      </colgroup>
      <thead>
        <tr>
          <th v-for="(column, index) in columns" :key="'th'+index">
            {{column.title}}
          </th>
        </tr>
      </thead>
    </table>
  </div>
</template>
<script>
export default {
  name: 'table-header',
  props: {
    columns: {
      type: Array
    }
  }
}
</script>
<style scoped>

</style>
