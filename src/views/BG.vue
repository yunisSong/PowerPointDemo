<template>
  <div class="bg">
    <template v-for="i in itemsCount">
      <div class="one flex1"></div>
    </template>
    <!-- <div class="one flex1"></div>
    <div class="two flex1"></div>
    <div class="three flex1"></div> -->
  </div>
</template>

<script setup>
const itemsCount = 10
</script>

<style lang="scss" scoped>
.bg {
  display: flex;
  width: 100vw;
  height: 100vh;
}
.flex1 {
  flex: 1;
}
.one {
  background-color: #9dc8c8;
}
.one:nth-child(2n) {
  background-color: #58c9b9;
}
.two {
  background-color: #58c9b9;
}
.three {
  background-color: #9dc8c8;
}
</style>
