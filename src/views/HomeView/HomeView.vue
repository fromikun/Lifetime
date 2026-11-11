<!--
  ============================================================
  Lifetime · 首页
  ------------------------------------------------------------

  概念：把人生（以 90 岁为限）画成 4680 个格子，每格 = 一周。
  ============================================================
-->
<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import HeroSection from '@/components/HomeComps/HeroSection.vue'
import LifeGridDemo from '@/components/HomeComps/LifeGridDemo.vue'
import FeaturesSection from '@/components/HomeComps/FeaturesSection.vue'
import HowItWorks from '@/components/HomeComps/HowItWorks.vue'
import QuoteSection from '@/components/HomeComps/QuoteSection.vue'
import CtaSection from '@/components/HomeComps/CtaSection.vue'
import SiteFooter from '@/components/HomeComps/SiteFooter.vue'

/* ==================== 数据层（全部页面数据统一在此管理） ==================== */

/** 生命周历参数 */
const totalYears = 90
const weeksPerYear = 52
const totalWeeks = totalYears * weeksPerYear // 4680 格

/** 出生日期（页面唯一的用户输入状态） */
const birthDate = ref('1996-05-20')

/** 已度过多少周（含当前这一周） */
const livedWeeks = computed(() => {
  const birth = new Date(birthDate.value)
  if (Number.isNaN(birth.getTime())) return 0
  const now = new Date()
  const diffMs = now.getTime() - birth.getTime()
  const weeks = Math.floor(diffMs / (7 * 24 * 60 * 60 * 1000))
  return Math.min(Math.max(weeks, 0), totalWeeks)
})

const remainingWeeks = computed(() => totalWeeks - livedWeeks.value)
const livedPercent = computed(() => (livedWeeks.value / totalWeeks) * 100)

const todayLabel = new Intl.DateTimeFormat('zh-CN', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}).format(new Date())

/** 已度过的格子：按「十年」逐段从紫罗兰渐变到青绿，寓意岁月流逝 */
function cellStyle(index: number): Record<string, string> {
  if (index < livedWeeks.value) {
    const decade = Math.floor(index / (weeksPerYear * 10))
    const hue = 265 - decade * 14
    return { backgroundColor: `hsl(${hue} 85% 64% / 0.88)` }
  }
  return {}
}

function cellIndex(year: number, week: number) {
  return year * weeksPerYear + week
}

/** 功能特性卡片 */
const features = [
  {
    title: '生命周历',
    desc: '一张表画完一生，每一格是一周。走到哪一格、还剩多少格，一眼看清。',
    icon: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/><path d="M7 15h.01M12 15h.01M17 15h.01M7 18h.01M12 18h.01M17 18h.01"/>',
    chip: 'bg-violet-500/15 text-violet-300',
    glow: 'hover:shadow-violet-500/20',
  },
  {
    title: '每周一格',
    desc: '每周日晚花 5 分钟，给这一格写一句话：做了什么、见了谁、想了什么。',
    icon: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
    chip: 'bg-cyan-500/15 text-cyan-300',
    glow: 'hover:shadow-cyan-500/20',
  },
  {
    title: '重要的人',
    desc: '把父母、伴侣、孩子放进你的日历，看到你们还剩下多少个共同的格子。',
    icon: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/>',
    chip: 'bg-rose-500/15 text-rose-300',
    glow: 'hover:shadow-rose-500/20',
  },
  {
    title: '里程碑提醒',
    desc: '爸妈的 60 岁生日、孩子的 18 岁、你们的十年之约——提前提醒，不再错过。',
    icon: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>',
    chip: 'bg-amber-500/15 text-amber-300',
    glow: 'hover:shadow-amber-500/20',
  },
  {
    title: '隐私优先',
    desc: '所有数据端到端加密，只存于你的设备。没有人能读到你的日记，包括我们。',
    icon: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    chip: 'bg-emerald-500/15 text-emerald-300',
    glow: 'hover:shadow-emerald-500/20',
  },
  {
    title: '全平台同步',
    desc: 'iPhone、iPad、Mac 与网页版实时同步，无论在哪，格子永远是最新的。',
    icon: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><rect x="17" y="15" width="7" height="9" rx="1.5"/>',
    chip: 'bg-sky-500/15 text-sky-300',
    glow: 'hover:shadow-sky-500/20',
  },
]

/** 使用步骤 */
const steps = [
  {
    num: '01',
    title: '输入你的生日',
    desc: '一分钟完成设置，立刻生成一张专属于你的生命日历。',
  },
  {
    num: '02',
    title: '看清你的格子',
    desc: '已过的 30%、剩下的 70%，时间第一次有了形状和颜色。',
  },
  {
    num: '03',
    title: '每周写一格',
    desc: '每周收到一次温柔提醒，用一分钟记录这一格。十年后回头看，你会感谢现在的自己。',
  },
]

/* ==================== 滚动进场动画（页面级行为，挂在根节点上） ==================== */

const rootRef = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

onMounted(() => {
  const els = rootRef.value?.querySelectorAll<HTMLElement>('[data-reveal]')
  if (!els || els.length === 0) return
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed')
          observer?.unobserve(entry.target)
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
  )
  els.forEach((el) => observer!.observe(el))
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <div
    ref="rootRef"
    class="min-h-screen bg-zinc-950 text-zinc-100 antialiased selection:bg-violet-500/40"
  >
    <main>
      <HeroSection>
        <!-- 生命格子 Demo 挂在 Hero 右侧插槽，数据全部由 HomePage 提供 -->
        <template #grid>
          <LifeGridDemo
            :today-label="todayLabel"
            :birth-date="birthDate"
            :lived-weeks="livedWeeks"
            :remaining-weeks="remainingWeeks"
            :lived-percent="livedPercent"
            :total-years="totalYears"
            :weeks-per-year="weeksPerYear"
            :cell-style="cellStyle"
            :cell-index="cellIndex"
            @update:birth-date="birthDate = $event"
          />
        </template>
      </HeroSection>

      <FeaturesSection :features="features" />
      <HowItWorks :steps="steps" />
      <QuoteSection />
      <CtaSection />
    </main>

    <SiteFooter />
  </div>
</template>

<style>
/* ---------- 滚动进场动画（全局样式，供各展示组件内的 [data-reveal] 元素使用） ---------- */
[data-reveal] {
  opacity: 0;
  transform: translateY(26px);
  transition:
    opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: var(--d, 0ms);
}
[data-reveal].is-revealed {
  opacity: 1;
  transform: none;
}
@media (prefers-reduced-motion: reduce) {
  [data-reveal] {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>
