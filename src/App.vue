<template>
  <!-- <LoginLayout v-if="check"/>
  <AdminLayout v-else/> -->
  <router-view/>
</template>

<script>
  // import LoginLayout from "./layouts/LoginLayout";
  // import AdminLayout from "./layouts/AdminLayout";
  export default {
    data () {
      return {
        // check: true
      }
    },
    // components: {
    //   LoginLayout,
    //   AdminLayout
    // }
  }
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  border: none;
}
</style>
