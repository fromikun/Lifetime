<!-- 导航栏（纯展示）：链接数据由 HomePage 传入 -->
<script setup lang="ts">
interface NavLink {
  label: string
  href: string
}

defineProps<{ links: NavLink[] }>()
</script>

<template>
  <header class="border-b border-white/5 backdrop-blur-xl">
    <nav class="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
      <a href="#" class="flex items-center gap-2.5">
        <span
          class="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-violet-500 to-cyan-400"
        >
          <svg
            viewBox="0 0 24 24"
            class="h-4 w-4 text-white"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M6 4v16M18 4v16" stroke-linecap="round" />
            <path d="M6 7h12M6 12h12M6 17h12" stroke-linecap="round" />
          </svg>
        </span>
        <span class="text-lg font-bold tracking-tight">Lifetime</span>
      </a>

      <div class="hidden items-center gap-8 md:flex">
        <a
          v-for="l in links"
          :key="l.href"
          :href="l.href"
          class="text-sm text-zinc-400 transition hover:text-white"
        >
          {{ l.label }}
        </a>
      </div>

      <a
        href="#download"
        class="rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-white/85"
      >
        免费下载
      </a>
    </nav>
  </header>
</template>
