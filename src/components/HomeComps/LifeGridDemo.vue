<!-- 生命日历 Demo（纯展示）：周数数据与格子样式函数全部由 HomePage 传入，日期输入通过事件回传 -->
<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  todayLabel: string
  birthDate: string
  livedWeeks: number
  remainingWeeks: number
  livedPercent: number
  totalYears: number
  weeksPerYear: number
  cellStyle: (index: number) => Record<string, string>
  cellIndex: (year: number, week: number) => number
}

const props = defineProps<Props>()

const emit = defineEmits<{ 'update:birthDate': [value: string] }>()

/** 把日期选择器的输入通过 v-model 回传给 HomePage，本组件不持有状态 */
const dateModel = computed({
  get: () => props.birthDate,
  set: (value: string) => emit('update:birthDate', value),
})
</script>

<template>
  <div
    class="rounded-3xl border border-white/10 bg-white/3 p-6 shadow-2xl shadow-black/40 backdrop-blur-sm sm:p-8"
  >
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div>
        <h2 class="font-semibold">你的生命日历</h2>
        <p class="mt-0.5 text-xs text-zinc-500">{{ todayLabel }} · 以 90 岁为限</p>
      </div>
      <label
        class="flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-900 px-3 py-2"
      >
        <svg
          class="h-4 w-4 text-zinc-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" stroke-linecap="round" />
        </svg>
        <input
          v-model="dateModel"
          type="date"
          class="bg-transparent text-sm outline-none"
          style="color-scheme: dark"
        />
      </label>
    </div>

    <div class="mt-6 grid grid-cols-3 gap-3">
      <div class="rounded-2xl bg-zinc-900 p-3.5 text-center">
        <div class="text-[10px] uppercase tracking-wider text-zinc-500">已度过</div>
        <div class="mt-1 text-xl font-bold text-violet-300">
          {{ livedWeeks.toLocaleString() }} 周
        </div>
      </div>
      <div class="rounded-2xl bg-zinc-900 p-3.5 text-center">
        <div class="text-[10px] uppercase tracking-wider text-zinc-500">剩余</div>
        <div class="mt-1 text-xl font-bold text-cyan-300">
          {{ remainingWeeks.toLocaleString() }} 周
        </div>
      </div>
      <div class="rounded-2xl bg-zinc-900 p-3.5 text-center">
        <div class="text-[10px] uppercase tracking-wider text-zinc-500">人生进度</div>
        <div class="mt-1 text-xl font-bold">{{ livedPercent.toFixed(1) }}%</div>
      </div>
    </div>

    <div class="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
      <div
        class="h-full rounded-full bg-linear-to-r from-violet-400 to-cyan-300 transition-all duration-700"
        :style="{ width: `${livedPercent}%` }"
      />
    </div>

    <div class="life-grid-wrap mt-6">
      <div class="life-grid">
        <div
          v-for="year in totalYears"
          :key="year"
          class="life-row"
          :class="{ 'life-row--decade': year > 1 && (year - 1) % 10 === 0 }"
        >
          <div
            v-for="week in weeksPerYear"
            :key="week"
            class="cell"
            :class="{
              'is-lived': cellIndex(year - 1, week - 1) < livedWeeks,
              'is-current': cellIndex(year - 1, week - 1) === livedWeeks,
            }"
            :style="cellStyle(cellIndex(year - 1, week - 1))"
            :title="`第 ${year} 年 · 第 ${week} 周`"
          />
        </div>
      </div>
    </div>

    <div
      class="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-zinc-500"
    >
      <span class="flex items-center gap-1.5"
        ><span class="h-2 w-2 rounded-[3px] bg-violet-400" />已度过</span
      >
      <span class="flex items-center gap-1.5"
        ><span class="h-2 w-2 animate-pulse rounded-[3px] bg-white" />这一周</span
      >
      <span class="flex items-center gap-1.5"
        ><span class="h-2 w-2 rounded-[3px] bg-white/10" />还未到来</span
      >
    </div>
  </div>
</template>

<style scoped>
/* ---------- 生命格子 ----------
   方案：百分比宽度 + 内边距模拟间距（不用 flex 分配，也不用 gap）
   - 每个格子宽度固定为 100% / 52，flex: none 不参与分配，
     避免浏览器对小数像素取整导致缝隙大小不一（尤其两端）；
   - 间距由格子的 padding 营造（background-clip: content-box），
     因此格子之间、网格四周的缝隙都由同一个值推导，绝对均匀；
   - 网格随容器宽度自适应，始终铺满。 */
.life-grid-wrap {
  --cell-gap: 2px;
  --decade-gap: 12px;
}
@media (max-width: 420px) {
  .life-grid-wrap {
    --cell-gap: 1px;
    --decade-gap: 8px;
  }
}

.life-grid {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: calc(var(--cell-gap) / 2);
}

.life-row {
  display: flex;
  width: 100%;
}

.life-row--decade {
  margin-top: var(--decade-gap);
}

.cell {
  box-sizing: border-box;
  flex: none;
  width: calc(100% / 52);
  aspect-ratio: 1 / 1;
  padding: calc(var(--cell-gap) / 2);
  background-clip: content-box;
  border-radius: 1px;
  background-color: rgb(255 255 255 / 0.07);
}

/* 当前这一周：白色呼吸光点 */
.cell.is-current {
  background: #fff !important;
  box-shadow: 0 0 8px 1px rgb(255 255 255 / 0.8);
  animation: cell-pulse 2s ease-in-out infinite;
}
@keyframes cell-pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.45;
  }
}
</style>
