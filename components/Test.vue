<template>
  <div class="wrap">
    <button class="btn" @click="clickHandle">test</button>
  </div>
</template>
<style scoped>
.wrap {
  padding: 12px;
  border-radius: 4px;
  background-color: #ccc;
}
.wrap .btn {
  padding: 0 8px;
  color: #fff;
  border-radius: 4px;
  background: var(--vp-c-green);
}
.wrap .btn:hover{
  background: var(--vp-c-green-dark);
}
</style>
<script setup>
const clickHandle = () => alert(1111)
</script>
