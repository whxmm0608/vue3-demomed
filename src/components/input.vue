<template>
  <input type="text" v-model="p.name.value" />
  <input type="text" v-model="p.age.value" />
  <input type="text" v-model="a" />
</template>
<script setup>
import { reactive, toRef, toRefs } from "vue";
const person = reactive({
  name: "dasd",
  age: 18,
});

//   const name2 = person.name;

//桥接
// const name1 = toRef(person, "name");
const p = toRefs(person);
console.log(p);
const a = 1;
</script>
