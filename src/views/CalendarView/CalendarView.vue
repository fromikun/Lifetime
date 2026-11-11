<template>
  <el-calendar v-model="date">
    <!-- 自定义每个日期格子的内容 -->
    <template #date-cell="{ data }">
      <div class="cell">
        <span class="size-2">{{ data.day.split('-')[2] }}</span>
        <span class="festival">{{ festivalOf(data.day) }}</span>
      </div>
    </template>
  </el-calendar>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Solar } from 'lunar-typescript'

const date = ref(new Date())

function festivalOf(dayStr: string) {
  const date = new Date(dayStr)
  const solar = Solar.fromYmd(date.getFullYear(), date.getMonth() + 1, date.getDate())
  const lunar = solar.getLunar()
  return lunar.getFestivals()[0] || lunar.getJieQi() || lunar.getDayInChinese()
}
</script>
