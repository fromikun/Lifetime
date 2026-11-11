<!-- 功能特性（纯展示）：卡片数据由 HomePage 传入 -->
<script setup lang="ts">
interface Feature {
  title: string
  desc: string
  icon: string
  chip: string
  glow: string
}

defineProps<{ features: Feature[] }>()
</script>

<template>
  <section id="features" class="relative py-24">
    <div class="mx-auto px-6">
      <div data-reveal class="mx-auto max-w-2xl text-center">
        <p class="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">功能特性</p>
        <h2 class="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
          一套让时间变得可见的工具
        </h2>
        <p class="mt-4 text-zinc-400">
          不是倒计时制造焦虑，而是把抽象的一生摊开在桌面上，帮你把时间花在真正重要的事上。
        </p>
      </div>

      <div class="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(f, i) in features"
          :key="f.title"
          data-reveal
          :style="{ '--d': `${(i % 3) * 100}ms` }"
          class="group rounded-2xl border border-white/10 bg-white/3 p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl"
          :class="f.glow"
        >
          <span
            class="inline-flex h-11 w-11 items-center justify-center rounded-xl"
            :class="f.chip"
          >
            <svg
              class="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
              v-html="f.icon"
            ></svg>
          </span>
          <h3 class="mt-5 text-lg font-semibold">{{ f.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-zinc-400">{{ f.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
