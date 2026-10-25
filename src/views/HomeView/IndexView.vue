<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavComp from '@/components/HomeComps/NavComp.vue'
import HeaderComp from '@/components/HomeComps/HeaderComp.vue'
</script>

<template>
  <!-- @/views/HomeView/HomeView.vue -->
  <div class="h-full grid grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
    <header class="col-span-2">
      <HeaderComp />
    </header>

    <aside>
      <NavComp />
    </aside>

    <main>
      <RouterView />
    </main>
  </div>
</template>
