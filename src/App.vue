<template>
  <div class="app">
    <router-view/>
    <tab-bar/>
  </div>
</template>

<script setup>
import { ref,reactive } from 'vue'
import TabBar from '@/components/tab-bar/tab-bar.vue'
</script>
<style scoped>

</style>
