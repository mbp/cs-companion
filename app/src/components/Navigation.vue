<template>
  <nav class="crumbs">
    <ol>
      <li class="crumb">
        <router-link to="/">Home</router-link>
      </li>
      <li class="crumb">{{ current }}</li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
defineProps({
  current: String,
});
</script>

<style scoped>
.crumbs ol {
  list-style-type: none;
  padding-left: 0;
}

.crumb {
  display: inline-block;
}

.crumb a::after {
  display: inline-block;
  color: #000;
  content: ">";
  font-size: 80%;
  font-weight: bold;
  padding: 0 3px;
}
</style>
