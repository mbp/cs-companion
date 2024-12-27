<script setup lang="ts">
const copyCmd = async (id: string) => {
  const text = document.getElementById(id)?.innerText;
  if (text) {
    await navigator.clipboard.writeText(text);
  }
};
</script>

<template>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 p-4">
    <div class="bg-gray-600 shadow-md rounded-lg p-4">
      <p class="footer">Rethrow last grenade</p>
      <pre id="rethrow">sv_rethrow_last_grenade</pre>
      <button
        class="mt-2 bg-blue-500 text-white py-1 px-3 rounded"
        @click="copyCmd('rethrow')"
      >
        Copy
      </button>
    </div>

    <div class="bg-gray-600 shadow-md rounded-lg p-4">
      <p class="footer">Fly command</p>
      <pre id="fly">noclip</pre>
      <button
        class="mt-2 bg-blue-500 text-white py-1 px-3 rounded"
        @click="copyCmd('fly')"
      >
        Copy
      </button>
    </div>

    <div class="bg-gray-600 shadow-md rounded-lg p-4">
      <p class="footer">Remove smokes</p>
      <pre id="remove-smokes">ent_fire smokegrenade_projectile kill</pre>
      <button
        class="mt-2 bg-blue-500 text-white py-1 px-3 rounded"
        @click="copyCmd('remove-smokes')"
      >
        Copy
      </button>
    </div>
  </div>
</template>
