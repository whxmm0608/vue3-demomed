<template>
  <div>
    <p>姓名:{{ job.name }}</p>
    <p>年龄:{{ job.age }}</p>
    <p>{{ week }}</p>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";

const theme = {
  color: "red",
};

// const number = reactive(666);
const week = ref(7);
console.log(week.value); //在js中需要.value，在模板中不需要

const job = reactive({
  name: "ft",
  age: 18,
});

console.log(job);
</script>

<style scoped>
p {
  color: v-bind("theme.color");
}
</style>
