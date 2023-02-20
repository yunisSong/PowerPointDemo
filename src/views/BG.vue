<template>
  <div class="bg">
    <div class="one flex1"></div>
    <div class="two flex1"></div>
    <div class="three flex1"></div>
  </div>
</template>

<script setup></script>

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
.two {
  background-color: #58c9b9;
}
.three {
  background-color: #9dc8c8;
}
</style>
