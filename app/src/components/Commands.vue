<script setup lang="ts">
var commands = [
  {
    id: "rethrow-last-grenade",
    name: "Rethrow last grenade",
    command: "sv_rethrow_last_grenade",
  },
  {
    id: "fly-command",
    name: "Fly command",
    command: "noclip",
  },
  {
    id: "remove-smokes",
    name: "Remove smokes",
    command: "ent_fire smokegrenade_projectile kill",
  },
];
const copyCmd = async (id: string) => {
  const text = document.getElementById(id)?.innerText;
  if (text) {
    await navigator.clipboard.writeText(text);
  }
};
</script>

<template>
  <h2 class="text-2xl font-bold mb-4 text-center text-white-800">
    Useful commands
  </h2>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 p-4">
    <div
      class="bg-gray-600 shadow-md rounded-lg p-4"
      v-for="command in commands"
      :key="command.id"
    >
      <p>{{ command.name }}</p>
      <pre :id="command.id">{{ command.command }}</pre>
      <button
        class="mt-2 bg-blue-500 text-white py-1 px-3 rounded-sm cursor-pointer"
        @click="copyCmd(command.id)"
      >
        Copy
      </button>
    </div>
  </div>
</template>
