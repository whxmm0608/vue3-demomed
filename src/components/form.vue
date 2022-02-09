<template>
  <el-form ref="formRef" :model="form" label-width="120px">
    <el-form-item label="Activity name">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="Activity zone">
      <el-select v-model="form.region" placeholder="please select your zone">
        <el-option label="Zone one" value="shanghai"></el-option>
        <el-option label="Zone two" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="Activity time">
      <el-col :span="11">
        <el-date-picker
          v-model="form.date1"
          type="date"
          placeholder="Pick a date"
          style="width: 100%"
        ></el-date-picker>
      </el-col>
      <el-col :span="2" class="text-center">
        <span class="text-gray-500">-</span>
      </el-col>
      <el-col :span="11">
        <el-time-picker
          v-model="form.date2"
          placeholder="Pick a time"
          style="width: 100%"
        ></el-time-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="Instant delivery">
      <el-switch v-model="form.delivery"></el-switch>
    </el-form-item>
    <el-form-item label="Activity type">
      <el-checkbox-group v-model="form.type">
        <el-checkbox label="Online activities" name="type"></el-checkbox>
        <el-checkbox label="Promotion activities" name="type"></el-checkbox>
        <el-checkbox label="Offline activities" name="type"></el-checkbox>
        <el-checkbox label="Simple brand exposure" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
  </el-form>
</template>
<script scope setup>
import { reactive, ref, toRefs, defineProps, defineEmits, defineExpose } from 'vue'
import { stringifyQuery } from 'vue-router';

// do not use same name with ref
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

/** 定义props */
const props = defineProps({
  type: String,
  name: String,
})

console.log(props);


/** 定义emitter */
const emit = defineEmits(['change', 'delete'])

// defineExpose({
//   a,
//   b,
// })

const a = ref(2);
console.log(a.value);


/** toRefs用法 将响应式对象转换为普通对象 start*/
const state = reactive({
  foo: 1,
  bar: 2
})
const stateAsRefs = toRefs(state)
console.log('state', state);
console.log('stateAsRefs', stateAsRefs);

/** toRefs用法 将响应式对象转换为普通对象  end*/

const onSubmit = () => {
  console.log('submit!')
}
</script>
