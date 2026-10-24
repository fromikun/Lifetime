<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { routes } from '@/router/index'
</script>

<template>
  <main class="h-screen">
    <nav class="flex flex-col p-2 *:flex *:items-center gap-3">
      <RouterLink :to="item.path" v-for="item in routes" :key="item.path">
        <el-button size="large" type="primary">
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span>{{ item.meta.text }}</span>
        </el-button>
      </RouterLink>
    </nav>
  </main>
</template>
