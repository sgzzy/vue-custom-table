<template>
  <div>
    <table>
      <colgroup>
          <col v-for="(column, index) in columns" :key="index" :width="column.width"></col>
      </colgroup>
      <tbody>
        <tr>
          <td
          ></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "table-body"
};
</script>
<style scoped>

</style>
