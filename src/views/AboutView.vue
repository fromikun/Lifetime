<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Select {
  name: string
  selected: boolean
  key: string
}

const names = ref<string>('')
const finishArr = ref<Select[]>([])

const read = () => {
  const local = JSON.parse(localStorage.getItem('finishData') || '[]')
  if (local) return local
}
const save = () => {
  const data = JSON.stringify(finishArr.value)
  localStorage.setItem('finishData', data)
}
const removed = (keys: string) => {
  const res = confirm('Are you sure?')
  if (res) {
    const index = finishArr.value.findIndex((i) => i.key === keys)
    if (index !== -1) finishArr.value.splice(index, 1)
    save()
  }
}
const add = () => {
  const keyIndex = Number(finishArr.value[finishArr.value.length - 1]?.key || 0) + 1
  finishArr.value.push({
    name: names.value,
    selected: false,
    key: keyIndex.toString(),
  })
  save()
}
const update = (keys: string) => {
  finishArr.value.forEach((i) => {
    if (i.key === keys) i.selected === false ? (i.selected = true) : (i.selected = false)
  })
  save()
}

onMounted(() => {
  finishArr.value = read()
})
</script>

<template>
  <div class="grid *:bg-[#91c9a8] *:hover: bg-[#43ba73] gap-4">
    <div>
      <el-input v-model="names" type="text" placeholder="输入名字" />
      <el-button type="primary" @click="add">添加</el-button>
    </div>

    <div v-for="ele in finishArr" :key="ele.key">
      <input type="checkbox" :id="ele.key" @change="update(ele.key)" :checked="ele.selected" />
      <label class="px-3" :for="ele.key">{{ ele.name }}</label>
      <el-button type="warning" @click="removed(ele.key)">删除</el-button>
    </div>
  </div>
</template>
