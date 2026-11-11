<!-- 使用步骤（纯展示）：步骤数据由 HomePage 传入 -->
<script setup lang="ts">
interface Step {
  num: string
  title: string
  desc: string
}

defineProps<{ steps: Step[] }>()
</script>

<template>
  <section id="how" class="relative py-24">
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <div
        class="absolute top-1/3 left-1/2 h-72 w-xl -translate-x-1/2 rounded-full bg-violet-600/10 blur-[120px]"
      ></div>
    </div>

    <div class="relative mx-auto px-6">
      <div data-reveal class="mx-auto max-w-2xl text-center">
        <p class="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">如何使用</p>
        <h2 class="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
          三分钟，看见你的一生
        </h2>
      </div>

      <div class="mt-14 grid gap-6 md:grid-cols-3">
        <div
          v-for="(s, i) in steps"
          :key="s.num"
          data-reveal
          :style="{ '--d': `${i * 120}ms` }"
          class="relative rounded-2xl border border-white/10 bg-zinc-900/60 p-8"
        >
          <span
            class="bg-linear-to-br from-violet-400 to-cyan-300 bg-clip-text text-5xl font-extrabold text-transparent"
          >
            {{ s.num }}
          </span>
          <h3 class="mt-4 text-lg font-semibold">{{ s.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-zinc-400">{{ s.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
