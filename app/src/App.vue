<script setup lang="ts">
import Header from "./components/Header.vue";
</script>

<template>
  <div class="flex h-screen bg-gray-900">
    <div class="flex-1 flex flex-col">
      <Header />

      <hr class="border-gray-700" />
      <main class="flex-1 p-2 bg-gray-800 text-white">
        <router-view />
      </main>
    </div>
  </div>
</template>
