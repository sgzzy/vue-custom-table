<template>
  <div>
    <vue-custom-table :thead="thead" :datas="datas"></vue-custom-table>
  </div>
</template>
<script>
import vueCustomTable from "./component/vue-table";
import { thead, data } from "./mock/mock";
export default {
  name: "app",
  components: { vueCustomTable },
  data: function() {
    return {
      thead: thead,
      datas: data
    };
  }
};
</script>

<style scoped>
  @import './styles/table.css';
</style>

