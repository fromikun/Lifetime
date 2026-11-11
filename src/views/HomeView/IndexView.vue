<!--
  ============================================================
  Lifetime · 首页
  ------------------------------------------------------------

  概念：把人生（以 90 岁为限）画成 4680 个格子，每格 = 一周。
  ============================================================ -->
<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComp from '@/components/HomeComps/HeaderComp.vue'

/** 导航链接 */
const navLinks = [
  { label: '功能', href: '#features' },
  { label: '如何使用', href: '#how' },
  { label: '关于', href: '#about' },
]
</script>

<template>
  <!-- @/views/HomeView/HomeView.vue -->
  <div class="grid grid-cols-[1fr] grid-rows-[auto_1fr] bg-[#0c0718]">
    <header class="col-span-2 sticky top-0 z-10">
      <HeaderComp :links="navLinks" />
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>
