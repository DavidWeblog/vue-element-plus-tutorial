<template>
<div id="app">
  <span class="svg-container">
    <svg-icon icon-class="password" />
  </span>
  <router-view />
</div>
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }
</style>
