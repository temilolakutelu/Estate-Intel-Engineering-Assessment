<template>
  <div class="home">
    <data-table></data-table>
  </div>
</template>

<script>
// @ is an alias to /src
import DataTable from "@/components/DataTable.vue";

export default {
  name: "Home",
  components: {
    DataTable
  },
};
</script>
