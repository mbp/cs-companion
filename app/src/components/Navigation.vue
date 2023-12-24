<template>
  <nav class="crumbs">
    <ol>
      <li v-for="parent in parents" :key="parent.title" class="crumb">
        <router-link :to="{ name: parent.routeName, params: parent.params }">
          {{ parent.title }}
        </router-link>
      </li>
      <li class="crumb">
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

<style scoped>
.crumbs ol {
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
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
