<template>
  <nav class="crumbs">
    <ol class="flex space-x-2 text-gray-400">
      <li v-for="parent in parents.slice(1)" :key="parent.title" class="crumb">
        <router-link
          :to="{ name: parent.routeName, params: parent.params }"
          class="text-blue-500 hover:underline"
        >
          {{ parent.title }}
        </router-link>
        <span class="mx-2">/</span>
      </li>
      <li class="crumb text-gray-400 font-semibold">
        {{ current }}
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { RouteParamsRaw } from "vue-router";

interface RouteParent {
  routeName: string;
  title: string;
  params?: RouteParamsRaw;
}

defineProps({
  current: {
    type: String,
    required: true,
  },
  parents: {
    type: Object as PropType<Array<RouteParent>>,
    required: true,
  },
});
</script>
