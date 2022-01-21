<template>
  <p>1233232</p>
</template>
<script setup>
const theme = {
  color: 'red'
}
</script>

<style scoped>
p {
  color: v-bind("theme.color");
}
</style>
