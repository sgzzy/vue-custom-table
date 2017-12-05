<template>
  <div>
  </div>
</template>
<script>
export default {
  name: 'vue-custom-table',
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

  }
}
</script>
<style scoped>

</style>
