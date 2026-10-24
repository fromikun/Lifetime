<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavView from '@/components/AppComps/NavComp.vue'
import HeaderComp from '@/components/AppComps/HeaderComp.vue'
</script>

<template>
  <header>
    <HeaderComp></HeaderComp>
  </header>

  <main>
    <nav>
      <NavView></NavView>
    </nav>

    <div>
      <RouterView />
    </div>
  </main>
</template>

<style scoped>
* > {
  border: 1px solid;
}
</style>
