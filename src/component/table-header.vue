<template>
  <div>
    <table>
      <colgroup>
          <col v-for="(column, index) in columns" :key="index" :width="column.width"></col>
      </colgroup>
      <thead>
        <tr>
          <th></th>
        </tr>
      </thead>
    </table>
  </div>
</template>
<script>
export default {
  name: 'table-header'
}
</script>
<style scoped>

</style>
